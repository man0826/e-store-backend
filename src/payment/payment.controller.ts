import { Controller, Post, RawBodyRequest, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post('webhook')
  webhook(@Req() req: RawBodyRequest<Request>, @Res() res: Response) {
    return this.paymentService.webhook(req, res);
  }
}
