import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export function PageFooter() {
  return (
    <footer className="border-t py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-xl font-bold">
              LookTook
            </Link>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-sm text-gray-600 hover:text-gray-900">
                隐私政策
              </Link>
              <Link href="/terms" className="text-sm text-gray-600 hover:text-gray-900">
                用户协议
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
              <ExternalLink className="h-4 w-4" />
            </Button>
            <p className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} LookTook. 保留所有权利。
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}