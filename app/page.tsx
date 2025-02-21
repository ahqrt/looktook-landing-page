import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { PageFooter } from "@/components/ui/pagefooter";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* 导航栏 */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            LookTook
          </Link>
        </div>
      </nav>

      {/* 主页横幅 */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
          <div className="absolute inset-y-0 right-0 w-[200%] -translate-x-1/2 bg-primary/5 [mask-image:radial-gradient(farthest-side_at_center,white,transparent)] md:w-full md:translate-x-0" />
        </div>
        <div className="container mx-auto px-4">
          <div className="relative">
            <div className="absolute -left-4 top-0 h-72 w-72 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -right-4 bottom-0 h-72 w-72 bg-secondary/10 rounded-full blur-3xl" />

            <div className="relative text-center">
              <div className="inline-flex items-center rounded-full border border-neutral-200 bg-white/80 backdrop-blur-sm px-3 py-1 text-sm leading-6 text-neutral-600 ring-1 ring-neutral-900/5 mb-8 shadow-sm hover:bg-white/90 transition-colors">
                <span className="font-semibold pr-2 text-[#272636]">🚀 即将上线</span>
                <span className="border-l border-neutral-200 pl-2">2025年发布</span>
              </div>

              <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6">
                <span className="bg-gradient-to-r from-gray-900 via-[#CBF229]/30 to-gray-500 bg-clip-text text-transparent">
                  逛出你的专属
                </span>
                <span className="relative whitespace-nowrap">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 418 42"
                    className="absolute left-0 top-2/3 h-[0.58em] w-full fill-[#CBF229]/20"
                    preserveAspectRatio="none"
                  >
                    <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                  </svg>
                  <span className="relative bg-gradient-to-r from-gray-500 to-[#CBF229]/50 bg-clip-text text-transparent">
                    {" "}
                    生活方式
                  </span>
                </span>
              </h2>

              <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                以<span className="text-[#272636] font-semibold">网上购物</span>和
                <span className="text-[#272636] font-semibold">LOOKBOOK</span>
                功能为核心，LookTook致力于打破生活方式品牌与生活方式消费者之间的双向触及困境，触及并满足消费者的物质和精神需求，助力生活方式消费的成长。
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 产品介绍 */}
      <section id="product" className="py-24 bg-[#272636]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              产品介绍
            </h2>
            <div className="mt-4 h-1 w-20 bg-[#CBF229]/20 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] md:h-[500px]">
              <div className="absolute top-0 left-0 w-3/4 h-auto transform -rotate-3 transition-transform hover:rotate-0 duration-500 z-10">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Weixin%20Image_20250220234857-drE9FlGkIaGLOMTGeVUk7Sqnc8MDM7.png"
                  alt="LOOKTOOK Fitness Showcase 1"
                  className="rounded-2xl shadow-2xl w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-20 right-0 w-3/4 h-auto transform rotate-3 transition-transform hover:rotate-0 duration-500">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Weixin%20Image_20250220234851-GnAkH7lwrWSwkqRHRpyTLw6CJrTqlw.png"
                  alt="LOOKTOOK Fitness Showcase 2"
                  className="rounded-2xl shadow-2xl w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-8">
              <div className="inline-flex items-center rounded-full bg-[#CBF229]/10 px-3 py-1 text-sm text-[#CBF229]">
                Revolutionary Experience
              </div>
              <h3 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Lookbook详情页
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                看上别人用的那个好东西了？它其实也是货架，点击可以直接购买，想不到吧？
              </p>
              <ul className="space-y-4">
                {["独特的社区互动", "创新的购物体验"].map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <div className="h-2 w-2 rounded-full bg-[#CBF229] mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#272636]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center rounded-full bg-[#CBF229]/10 px-3 py-1 text-sm text-[#CBF229]">
                Smart Shopping
              </div>
              <h3 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                双屏默认页面
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                拒绝“鸡肋”的收藏功能，书签&购物车双屏让你随心归纳整理心尖上的好东西，不仅助你实现“真实加购”，还是你内容创作的“中转站”
              </p>
              <ul className="space-y-4">
                {["链接内容创造", "“随心”加购"].map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <div className="h-2 w-2 rounded-full bg-[#CBF229] mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[600px] flex items-center justify-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-ZvtlH63gt7o3rZJy6mJnKBGq3U7nI4.png"
                alt="LOOKTOOK App Interface 1"
                className="absolute w-2/3 h-auto rounded-2xl shadow-2xl transform -rotate-2.28 z-10"
              />
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-skGFIcMoOLQ9mNFrk8uHIVpUS0DzT0.png"
                alt="LOOKTOOK App Interface 2"
                className="absolute w-2/3 h-auto rounded-2xl shadow-2xl transform rotate-6"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 关于我们 */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center">关于我们</h2>
            <div className="mt-4 h-1 w-20 bg-primary/20 rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                About Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">对普通和无聊 Say No！</h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  LookTook不仅仅是一个市场。我们正在建立一个社区，让生活方式爱好者和品牌聚集在一起，创造、分享和发现独特的体验。
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[{ value: "专属书签夹" }, { value: "LOOKBOOK" }].map((stat, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                      <div className="text-2xl font-bold text-primary">{stat.value}</div>
                      {/* <div className="text-xl font-bold text-gray-600">{stat.label}</div> */}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative aspect-video md:aspect-square rounded-2xl overflow-hidden bg-gray-100">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-MIbu58HWZhcXQFxu6yoiWFt1ShUA8s.png"
                alt="LookTook Lifestyle Products"
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 产品优势 */}
      <section id="benefits" className="py-12 md:py-16 bg-[#272636]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              产品优势
            </h2>
            <div className="mt-4 h-1 w-20 bg-[#CBF229]/20 rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "✨",
                title: "超绝消费体验",
                description: "依托高品质的生活方式产品库",
              },
              {
                icon: "🎯",
                title: "内容即货架",
                description: "缩短种草到购买路径",
              },
              {
                icon: "💫",
                title: "审美数字化",
                description: "个性化的品味推荐",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="group flex flex-col gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-[#CBF229]/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </span>
                  <h3 className="font-semibold text-white/90">{benefit.title}</h3>
                </div>
                <p className="text-gray-400 pl-10">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 常见问题 */}
      <section id="faq" className="py-12 md:py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center">常见问题</h2>
            <div className="mt-4 h-1 w-20 bg-primary/20 rounded-full"></div>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  question: "介绍一下LookTook？",
                  answer:
                    "LookTook是一个让消费者发现心爱品牌产品的电商平台。我们有简约高级不花哨的商城，让你“逛”得沉浸，“拿”得轻松。",
                },
                {
                  question: "LookTook发布时间？",
                  answer: "我们将在2025年上半年发布。",
                },
                {
                  question: "LookTook未来计划？",
                  answer: "LookTook有明确的产品计划和营销计划。",
                },
              ].map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="group data-[state=open]:bg-primary/5 rounded-lg transition-colors duration-200 px-4"
                >
                  <AccordionTrigger className="text-left hover:no-underline">
                    <div className="flex items-center gap-3">
                      <span className="group-hover:text-primary transition-colors">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pl-9">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <PageFooter />
    </div>
  );
}
