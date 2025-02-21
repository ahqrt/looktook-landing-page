import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageFooter } from "@/components/ui/pagefooter";
import { Separator } from "@/components/ui/separator";
import { Header } from "@/components/ui/header";

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* 页眉 */}
      <Header/>

      {/* 主要内容 */}
      <main className="flex-1 p-4 md:p-8 lg:p-12">
        <Card className="mx-auto max-w-3xl">
          <CardHeader>
            <CardTitle className="text-center text-3xl font-bold">用户协议</CardTitle>
            <p className="text-center text-sm text-muted-foreground">最后更新时间：2025年2月01日</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <section className="space-y-4">
              <h2 className="text-xl font-semibold">引言</h2>
              <p className="text-muted-foreground">
                欢迎使用逛拿公司为您提供的逛拿平台（以下简称“本平台”）。在您注册成为本平台用户并使用我们的服务之前，请您务必仔细阅读并充分理解本服务协议的所有条款，特别是免除或限制责任的条款、对用户权利限制的条款、约定法律适用与管辖的条款等。限制、免责条款或者其他涉及您重大权益的条款可能以加粗等形式提示您重点注意。
              </p>
              <p className="text-muted-foreground">
                如您未满18周岁，或存在其他不具备与用户行为相适应的民事行为能力的情形，请在法定监护人的陪同下阅读本协议，在确保监护人同意本协议内容后使用本平台。您及您的监护人应依照法律法规规定，承担同意本协议及使用本平台而导致的相应后果。
              </p>

              <p className="text-muted-foreground">
                如您代表一家公司或其他法律主体在本平台上进行注册或其他活动，则您声明和保证，您有权使该公司或该法律主体受本协议的约束。
              </p>

              <p className="text-muted-foreground">
                请您特别注意，除非您已充分阅读、完全理解并接受本协议所有条款，否则您无权使用本平台提供的服务。如果您不同意本协议或其任何部分内容，或者无法准确理解本平台对条款的解释，请您不要进行后续操作。您点击“同意”，或者您使用本平台，或者以其他任何明示或者默示方式表示接受本协议的，均视为您已阅读并同意本协议。本协议即在您与逛拿公司之间产生法律效力，成为对双方均具有约束力的法律文件。
              </p>
            </section>

            <Separator />

            <section className="space-y-4">
              <h2 className="text-xl font-semibold">定义及协议范围</h2>
              <h3 className="text-l font-semibold">定义</h3>
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                <li>本平台：指“逛拿”客户端软件和逛拿官方网站。</li>
                <li>
                  逛拿公司：指逛拿（上海）科技有限公司，本平台的开发、运营及管理方，包括其关联公司及合法继承或受让该主体权利义务的其他公司。
                </li>
                <li>
                  本平台服务：指逛拿公司通过本平台向用户提供的服务，包括但不限于信息发布、内容浏览、商品服务和交易、AI个性化搜索与推荐、交易撮合等功能。逛拿公司保留根据实际需要对服务进行调整、变更或中止的权利。
                </li>
                <li>逛拿账号或账号：指用户在使用本平台服务时可能需要注册的账号。</li>
                <li>
                  用户：指注册、登录、使用本平台服务的所有个人或机构，包括但不限于买家及其他相关用户。以下统称为“用户”或“您”。
                </li>
              </ul>

              <h3 className="text-l font-semibold">协议范围</h3>
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                <li>
                  本协议是您与逛拿公司之间关于您下载、安装、使用本平台所订立的协议，包括本协议正文、《逛拿隐私政策》以及逛拿公司现已发布或未来可能更新并以合理方式公布的各项规则、标准和通知等。这些规则是协议不可分割的部分，并具有等同的法律效力。
                </li>
                <li>
                  用户继续使用本平台服务，即表示用户已阅读并同意接受本协议及相关规则的约束。如果您不同意本协议或其任何部分内容，请您立即停止使用本平台服务。
                </li>
              </ul>
            </section>

            <Separator />

            <section className="space-y-4">
              <h2 className="text-xl font-semibold">知识产权声明</h2>
              <p className="text-muted-foreground">LOOKTOOK平台上的所有内容均受知识产权保护。</p>
            </section>

            <Separator />

            <section className="space-y-4">
              <h2 className="text-xl font-semibold">用户的法律责任</h2>
              <h3 className="text-l font-semibold">违约处理</h3>
              <p className="text-muted-foreground">
                <li>
                  在您违反本协议的条款时，逛拿公司保留独立判断的权利，并可立即中止或终止向您提供部分或全部本平台服务。这包括但不限于禁言、屏蔽信息、删除您发布的内容、封禁或注销您的账号等措施。您需要自行承担由此引起的所有损失（包括但不限于账号及其服务的无法使用、账号资产及其他权益的无法获取等）以及相应的法律责任。
                </li>
                <li>
                  如果您因违约导致逛拿公司终止本协议，逛拿公司有权基于与您在其他协议中的约定，终止其他相关协议下的合作。同样，如果您违反与逛拿公司在其他合作协议中的条款，逛拿公司也有权终止本协议。除了上述协议的终止，逛拿公司还可关联追究您的违约责任。
                </li>
              </p>

              <h3 className="text-l font-semibold">用户责任与公示</h3>
              <p className="text-muted-foreground">
                <li>
                  您需要为您的行为承担法律责任，这包括但不限于：向受害者支付赔偿、公开道歉、消除不良影响、返还财产等。若您的行为给逛拿公司造成损失，您应赔偿包括但不限于直接损失如行政罚款或赔偿金，以及间接损失如商誉损失、和解费用、律师费、诉讼费等。
                </li>
                <li>
                  逛拿公司可在平台上公示您的违约处置信息，以及其他通过国家行政或司法机关生效法律文书确认的违法信息。对于涉嫌违反法律法规的行为，我们有责任保存相关记录，并向国家有关机关报告，协助进行调查。
                </li>
              </p>
            </section>

            <Separator />

            <section className="space-y-4">
              <h2 className="text-xl font-semibold">协议变更与终止</h2>
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                <li>
                  逛拿公司保留在必要时对本协议进行修改的权利，并会通过本平台公告、系统消息、手机短信等合理的方式提前通知您。这些通知从发送之日起即被视为已经送达。您可以随时访问平台的相关页面以查阅协议的最新版本。
                </li>
                <li>
                  一旦本协议的修改生效后，如果您继续使用本平台服务，则表示您接受修改后的协议。如果您不同意更新后的协议，您应停止使用本平台。
                </li>
                <li>
                  当您注销您的逛拿账号或如果逛拿公司决定终止向您提供服务（包括但不限于封禁账号、注销账号等），本协议将同时终止。逛拿公司将不会对协议的终止另行通知。
                </li>
              </ul>
            </section>
          </CardContent>
        </Card>
      </main>

      {/* 页脚 */}
      <PageFooter/>
    </div>
  );
}
