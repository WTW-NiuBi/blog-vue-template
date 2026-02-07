import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const RESULT_MESSAGE = '__message';

/** 控制器可返回 { data?, __message? } 以自定义 message */
function normalize(data: unknown): { result: 1; message: string; data: unknown } {
  if (data != null && typeof data === 'object' && RESULT_MESSAGE in data) {
    const obj = data as Record<string, unknown>;
    const msg = obj[RESULT_MESSAGE];
    const payload = obj.data;
    return {
      result: 1,
      message: (msg as string) ?? 'success',
      data: payload !== undefined ? payload : null,
    };
  }
  return {
    result: 1,
    message: 'success',
    data: data ?? null,
  };
}

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<{ result: 1; message: string; data: unknown }> {
    return next.handle().pipe(map(normalize));
  }
}
