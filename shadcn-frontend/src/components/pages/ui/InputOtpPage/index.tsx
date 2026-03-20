import { useState } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "~/components/ui/input-otp";

export default function InputOtpPage() {
  const [otp6, setOtp6] = useState("");
  const [otp4, setOtp4] = useState("");

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Input OTP</h1>
        <p className="mt-2 text-muted-foreground">
          OTP（ワンタイムパスワード）入力用のコンポーネント。認証コードやPINなど、桁数が決まった数値入力を実現する。
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6桁（3桁ごとに区切り）</h2>
        <div className="flex flex-wrap gap-2">
          <InputOTP maxLength={6} value={otp6} onChange={(value) => setOtp6(value)}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSeparator />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4桁</h2>
        <div className="flex flex-wrap gap-2">
          <InputOTP maxLength={4} value={otp4} onChange={(value) => setOtp4(value)}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
            </InputOTPGroup>
          </InputOTP>
        </div>
      </section>
    </div>
  );
}
