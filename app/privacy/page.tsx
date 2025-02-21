import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Mountain } from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* 页眉 */}
      <header className="border-b px-4 py-4 md:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Mountain className="h-6 w-6" />
            <span className="text-xl font-bold">LOOKTOOK</span>
          </Link>
          <nav className="hidden space-x-6 md:flex">
            <Link href="/" className="text-sm hover:text-primary">
              首页
            </Link>
          </nav>
        </div>
      </header>

      {/* 主要内容 */}
      <main className="flex-1 p-4 md:p-8 lg:p-12">
        <Card className="mx-auto max-w-3xl">
          <CardHeader>
            <CardTitle className="text-center text-3xl font-bold">隐私政策</CardTitle>
            <p className="text-center text-sm text-muted-foreground">最后更新时间：2025年1月21日</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <section className="space-y-4">
              <h2 className="text-xl font-semibold">引言</h2>
              <p className="text-muted-foreground">
                名称为“Looktook”
                ，和/或“逛拿”的网站、小程序、客户端应用程序以及我们不时提供的其他形式（统称“本平台”）由逛拿（上海）科技有限公司及其关联公司（以下简称“我们”）合法拥有并运营。
              </p>
              <p className="text-muted-foreground">“用户”或“您”指逛拿平台的使用人。</p>

              <p className="text-muted-foreground">
                在本政策中，我们描述了我们依据相关法律法规和技术规范收集/使用/对外提供个人信息的做法，进一步阐述了您的个人信息相关权利。
              </p>

              <p className="text-muted-foreground">
                本政策与您所使用本平台服务息息相关，您在下载、安装、启动、浏览、注册、登录、使用本平台服务时，我们将按照本政策的约定处理和保护您的个人信息。“逛拿平台服务”具有《逛拿用户协议》中所定义之含义。
              </p>

              <p className="text-muted-foreground">
                如您未满18周岁或未满您居住所在地要求可使用本平台的年龄，或存在其他不具备与用户行为相适应的法定要求的情形，请您依照当地法要求（A）不要使用本平台，或（B）在监护人（“监护人”）的陪同、指导下阅读本政策，并在确保监护人同意本政策内容后使用本平台，如适用法要求。
              </p>

              <p className="text-muted-foreground">
                请在使用/继续使用本平台服务前，仔细并充分阅读本政策，并在需要时，按照本政策的指引，做出适当的选择。如果您不向我们提供特定个人信息，将可能导致我们无法向您提供本平台服务或导致本平台服务的使用受限，或者无法达到我们拟达到的服务效果。
              </p>
            </section>

            <Separator />

            <section className="space-y-4">
              <h2 className="text-xl font-semibold">我们收集的信息</h2>
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                <li>个人身份信息（姓名、电子邮件地址、电话号码）</li>
                <li>使用数据（您如何使用我们的服务）</li>
                <li>技术数据（IP地址、浏览器类型、设备信息）</li>
              </ul>
            </section>

            <Separator />

            <section className="space-y-4">
              <h2 className="text-xl font-semibold">信息使用方式</h2>
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                <li>提供和维护我们的服务</li>
                <li>通知您有关服务的变更</li>
                <li>提供客户支持</li>
                <li>收集分析和有价值的信息</li>
              </ul>
            </section>

            <Separator />

            <section className="space-y-4">
              <h2 className="text-xl font-semibold">数据保护</h2>
              <p className="text-muted-foreground">
                我们采取适当的安全措施来保护您的个人信息。但是，通过互联网传输的方法并非100%安全，我们不能保证绝对的安全性。
              </p>
            </section>

            <Separator />

            <section className="space-y-4">
              <h2 className="text-xl font-semibold">司法管辖归属</h2>
              <p className="text-muted-foreground">
                若您与本平台就隐私条款或相关服务产生任何争议，双方应首先友好协商解决；协商不成的，任何一方均有权向本平台运营主体
                [逛拿公司] 住所地有管辖权的人民法院提起诉讼。本平台运营主体的注册地址为
                【具体注册地址】
                ，该地址对应的法院将作为处理争议的管辖法院。此管辖法院的选择符合《中华人民共和国民事诉讼法》等相关法律法规的规定，旨在确保争议能够得到公正、高效的解决。
              </p>
            </section>
          </CardContent>
        </Card>
      </main>

      {/* 页脚 */}
      <footer className="border-t px-4 py-6 md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="space-y-3">
              <ul className="space-y-1">
                <li>
                  <Link
                    href="/privacy"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    隐私政策
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
                    用户协议
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-8 border-t pt-8">
              <p className="text-center text-sm text-muted-foreground">
                © {new Date().getFullYear()} 公司名称. 保留所有权利。
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
