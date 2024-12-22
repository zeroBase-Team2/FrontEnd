import { PropsWithChildren } from "react";

export default function MyPageLayout({ children }: PropsWithChildren) {
  return <main className="min-h-[calc(100vh-164px)]">{children}</main>;
}