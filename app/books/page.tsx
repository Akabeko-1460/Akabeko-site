"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function BooksPage() {
  const books = [
    // Technology
    {
      title: "リーダブルコード",
      author: "著：Dustin Boswell / Trevor Foucher",
      cat: "Technology",
      color: "bg-blue-50",
      image: "/book-covers/readable_code_v3.jpg",
      url: "https://www.amazon.co.jp/%E3%83%AA%E3%83%BC%E3%83%80%E3%83%96%E3%83%AB%E3%82%B3%E3%83%BC%E3%83%89-%E2%80%95%E3%82%88%E3%82%8A%E8%89%AF%E3%81%84%E3%82%B3%E3%83%BC%E3%83%89%E3%82%92%E6%9B%B8%E3%81%8F%E3%81%9F%E3%82%81%E3%81%AE%E3%82%B7%E3%83%B3%E3%83%97%E3%83%AB%E3%81%A7%E5%AE%9F%E8%B7%B5%E7%9A%84%E3%81%AA%E3%83%86%E3%82%AF%E3%83%8B%E3%83%83%E3%82%AF-Theory-practice-Boswell/dp/4873115655/ref=sr_1_1?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=34HM5KV58ZYEE&dib=eyJ2IjoiMSJ9.wR-JBaDaQmNPVq6UR7vjZyBVPeO1vwaNHglkdLF7N7AtZrRuG9hY67O8FKjeTD-wxmwY1KQww_M68W2-9ngVdk5PZLSTOrdY5W9ulm0-roKmEykcZm_7ZwbomUq5-wQBuJtXtllpXUjrTxP27w0l-a8FSmTK8k2GeC4ll03H4DKrUjgioOpQPThIC9p1xcAwIzcFbsQYpg-3kDtLoUpG0B7ZSXzJYLnLjjBZ2CnDUFA.WTUKe_BA_0sSkv7RerbPBueLmzqeSarxMK4KBeuGdCo&dib_tag=se&keywords=%E3%83%AA%E3%83%BC%E3%83%80%E3%83%96%E3%83%AB%E3%82%B3%E3%83%BC%E3%83%89&qid=1767952627&s=books&sprefix=%E3%83%AA%E3%83%BC%E3%83%80%E3%83%96%E3%83%AB%E3%81%93%E3%83%BCd%2Cstripbooks%2C327&sr=1-1",
    },
    // Business
    {
      title: "20字に削ぎ落とせ",
      author: "著：信元 夏代",
      cat: "Business",
      color: "bg-red-50",
      image: "/book-covers/20character_limit.jpg",
      url: "https://www.amazon.co.jp/20%E5%AD%97%E3%81%AB%E5%89%8A%E3%81%8E%E8%90%BD%E3%81%A8%E3%81%9B-%E3%83%AF%E3%83%B3%E3%83%93%E3%83%83%E3%82%B0%E3%83%A1%E3%83%83%E3%82%BB%E3%83%BC%E3%82%B8%E3%81%A7%E7%9B%B8%E6%89%8B%E3%82%92%E5%8B%95%E3%81%8B%E3%81%99-%E3%83%AA%E3%83%83%E3%83%97%E3%82%B7%E3%83%A3%E3%83%83%E3%83%84%E4%BF%A1%E5%85%83%E5%A4%8F%E4%BB%A3/dp/4023317985",
    },
    {
      title: "ゼロ秒思考",
      author: "著：赤羽 雄二",
      cat: "Business",
      color: "bg-red-50",
      image: "/book-covers/zerosecondsthinking.jpg",
      url: "https://www.amazon.co.jp/%E3%82%BC%E3%83%AD%E7%A7%92%E6%80%9D%E8%80%83-%E9%A0%AD%E3%81%8C%E3%82%88%E3%81%8F%E3%81%AA%E3%82%8B%E4%B8%96%E7%95%8C%E4%B8%80%E3%82%B7%E3%83%B3%E3%83%97%E3%83%AB%E3%81%AA%E3%83%88%E3%83%AC%E3%83%BC%E3%83%8B%E3%83%B3%E3%82%B0-%E8%B5%A4%E7%BE%BD-%E9%9B%84%E4%BA%8C/dp/447802099X",
    },
    {
      title: "ゼロ秒思考 行動編",
      author: "著：赤羽 雄二",
      cat: "Business",
      color: "bg-red-50",
      image: "/book-covers/zerosecondsthinking_exercisepart.jpg",
      url: "https://www.amazon.co.jp/%E3%82%BC%E3%83%AD%E7%A7%92%E6%80%9D%E8%80%83-%E8%A1%8C%E5%8B%95%E7%B7%A8-%E2%80%95%E2%80%95%E2%80%95%E5%8D%B3%E6%96%AD%E5%8D%B3%E6%B1%BA%E3%80%81%E5%8D%B3%E5%AE%9F%E8%A1%8C%E3%81%AE%E3%83%88%E3%83%AC%E3%83%BC%E3%83%8B%E3%83%B3%E3%82%B0-%E8%B5%A4%E7%BE%BD-%E9%9B%84%E4%BA%8C/dp/4478068208/ref=pd_lpo_d_sccl_1/356-0570232-2337444?pd_rd_w=1qNYV&content-id=amzn1.sym.855d8f70-df76-4181-80b0-56e48ae3bb9b&pf_rd_p=855d8f70-df76-4181-80b0-56e48ae3bb9b&pf_rd_r=GE0VJPZ47JDEZ5252T6Q&pd_rd_wg=m5SEm&pd_rd_r=7964b184-e63b-40c7-ba3c-ed51cbc15bff&pd_rd_i=4478068208&psc=1",
    },
    {
      title: "ロジカル・シンキング練習帳",
      author: "著：岡 重文",
      cat: "Business",
      color: "bg-red-50",
      image: "/book-covers/logicalthinking_practicenote.jpg",
      url: "https://www.amazon.co.jp/%E5%85%A5%E7%A4%BE1%E5%B9%B4%E7%9B%AE%E3%81%8B%E3%82%89%E5%B7%AE%E3%81%8C%E3%81%A4%E3%81%8F-%E3%83%AD%E3%82%B8%E3%82%AB%E3%83%AB%E3%83%BB%E3%82%B7%E3%83%B3%E3%82%AD%E3%83%B3%E3%82%B0%E7%B7%B4%E7%BF%92%E5%B8%B3-%E3%82%B0%E3%83%AD%E3%83%BC%E3%83%93%E3%82%B9/dp/4492534245",
    },
    {
      title: "コンサル一年目が学ぶこと",
      author: "著：大石 哲之",
      cat: "Business",
      color: "bg-red-50",
      image: "/book-covers/consultant_first_year_v3.jpg",
      url: "https://www.amazon.co.jp/gp/aw/d/4799315323/?_encoding=UTF8&pd_rd_plhdr=t&aaxitk=0ca3892ad201b032b9fa64d5b139494d&hsa_cr_id=0&qid=1767932768&sr=1-2-ac08f2b1-eb5b-4f1a-aa64-9e8f448c33ed&ref_=sbx_s_sparkle_sbtcd_asin_1_img&pd_rd_w=Dr1ez&content-id=amzn1.sym.f0facdbd-e6c4-4c86-85ba-0b3f009056ed%3Aamzn1.sym.f0facdbd-e6c4-4c86-85ba-0b3f009056ed&pf_rd_p=f0facdbd-e6c4-4c86-85ba-0b3f009056ed&pf_rd_r=XSYCBSR68W6819C02Y57&pd_rd_wg=klhHs&pd_rd_r=3e2fae5d-219c-426b-8a75-90365933ec3d",
    },
    {
      title: "リーダーの仮面",
      author: "著：安藤 広大",
      cat: "Business",
      color: "bg-red-50",
      image: "/book-covers/leadersmasc.jpg",
      url: "https://www.amazon.co.jp/%E3%83%AA%E3%83%BC%E3%83%80%E3%83%BC%E3%81%AE%E4%BB%AE%E9%9D%A2-%E3%83%BC%E3%83%BC-%E3%80%8C%E3%81%84%E3%81%A1%E3%83%97%E3%83%AC%E3%83%BC%E3%83%A4%E3%83%BC%E3%80%8D%E3%81%8B%E3%82%89%E3%80%8C%E3%83%9E%E3%83%8D%E3%82%B8%E3%83%A3%E3%83%BC%E3%80%8D%E3%81%AB%E9%A0%AD%E3%82%92%E5%88%87%E3%82%8A%E6%9B%BF%E3%81%88%E3%82%8B%E6%80%9D%E8%80%83%E6%B3%95-%E5%AE%89%E8%97%A4%E5%BA%83%E5%A4%A7/dp/4478110514/ref=sr_1_1?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=2OJK7PJ6ZSFWG&dib=eyJ2IjoiMSJ9.ul6QqZeVrC8qC3G-P37voDWOJWKBFzw5_eB5Kpce6HLwU75golLYiyMBoHO9NGMCyNWiNNdqnqigrGwL_NO9l8gyf0InDduf3Wc4tmtECAsu2fI95ppRQuLqxmx2PxTjZie_Bjk2kMhANeKTt0TM5QSs6ttHxczOO1CUjSQLuGKKY5aqD7csGwS8SmRDhBel-w9HTZ8K7vROCtibthyev6fQs6Uvu3ECa1pMNeCLViY.xeazqINd_tc0up83R2qUsCTJxfQaXWE-tbtA-gdnLCE&dib_tag=se&keywords=%E3%83%AA%E3%83%BC%E3%83%80%E3%83%BC%E3%81%AE%E4%BB%AE%E9%9D%A2&qid=1767932789&s=books&sprefix=%E3%83%AA%E3%83%BC%E3%83%80%E3%83%BC%E3%81%AE%E4%BB%AE%E9%9D%A2%2Cstripbooks%2C233&sr=1-1",
    },
    {
      title: "プロジェクトマネジメントの基本が全部わかる本",
      author: "著：橋本 将功",
      cat: "Business",
      color: "bg-red-50",
      image: "/book-covers/projectmanagementbasicknowledge.jpg",
      url: "https://www.amazon.co.jp/%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%83%9E%E3%83%8D%E3%82%B8%E3%83%A1%E3%83%B3%E3%83%88%E3%81%AE%E5%9F%BA%E6%9C%AC%E3%81%8C%E5%85%A8%E9%83%A8%E3%82%8F%E3%81%8B%E3%82%8B%E6%9C%AC-%E4%BA%A4%E6%B8%89%E3%83%BB%E3%82%BF%E3%82%B9%E3%82%AF%E3%83%9E%E3%83%8D%E3%82%B8%E3%83%A1%E3%83%B3%E3%83%88%E3%83%BB%E8%A8%88%E7%94%BB%E7%AB%8B%E6%A1%88%E3%81%8B%E3%82%89%E8%A6%8B%E7%A9%8D%E3%82%8A%E3%83%BB%E5%A5%91%E7%B4%84%E3%83%BB%E8%A6%81%E4%BB%B6%E5%AE%9A%E7%BE%A9%E3%83%BB%E8%A8%AD%E8%A8%88%E3%83%BB%E3%83%86%E3%82%B9%E3%83%88%E3%83%BB%E4%BF%9D%E5%AE%88%E6%94%B9%E5%96%84%E3%81%BE%E3%81%A7-%E6%A9%8B%E6%9C%AC-%E5%B0%86%E5%8A%9F/dp/4798177415/ref=sr_1_1?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=PFSX99XXBV38&dib=eyJ2IjoiMSJ9.HcCaDO0JOP4dWKNf2g_fXSAEZBDFH9uwuv-do1oM3fkaWseaio_eNydZgalhOuyKKkhGCSIoibIJzLLiFDkUOFanjSVGErVrPFbOgiE3pt-qww50yi4bu5dAWnwYFz_ZCSwUVCsaJgzGBE9Q292BmlNVKHwUdg7SjO27QpZKV9ofkUOAAdeJzdqWrnhDVVw3DNQbW3EzqfducFD7bwIQP9aeDZ5VDFvI1Db8lZJhTW0.iQGkJX5dp11hDQ4Y4oLWVXIf7vUaGuWm1bt_50pdvsU&dib_tag=se&keywords=%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%83%9E%E3%83%8D%E3%82%B8%E3%83%A1%E3%83%B3%E3%83%88%E3%81%AE%E5%9F%BA%E6%9C%AC%E3%81%8C%E5%85%A8%E9%83%A8%E3%82%8F%E3%81%8B%E3%82%8B%E6%9C%AC&qid=1767932813&s=books&sprefix=%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%83%9E%E3%83%8D%E3%82%B8%E3%83%A1%E3%83%B3%E3%83%88%E3%81%AE%E5%9F%BA%E6%9C%AC%E3%81%8C%E5%85%A8%E9%83%A8%E3%82%8F%E3%81%8B%E3%82%8B%E6%9C%AC%2Cstripbooks%2C202&sr=1-1",
    },
    {
      title: "イシューからはじめよ",
      author: "著：安宅 和人",
      cat: "Business",
      color: "bg-red-50",
      image: "/book-covers/issue_first_v2.jpg",
      url: "https://www.amazon.co.jp/%E3%82%A4%E3%82%B7%E3%83%A5%E3%83%BC%E3%81%8B%E3%82%89%E3%81%AF%E3%81%98%E3%82%81%E3%82%88%EF%BC%BB%E6%94%B9%E8%A8%82%E7%89%88%EF%BC%BD%E2%80%95%E2%80%95%E7%9F%A5%E7%9A%84%E7%94%9F%E7%94%A3%E3%81%AE%E3%80%8C%E3%82%B7%E3%83%B3%E3%83%97%E3%83%AB%E3%81%AA%E6%9C%AC%E8%B3%AA%E3%80%8D-%E5%AE%89%E5%AE%85%E5%92%8C%E4%BA%BA/dp/4862763561/ref=sr_1_1?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=3K4V298VZB8QX&dib=eyJ2IjoiMSJ9.XhZiNVfOt1SrAcQzPiTjOBZgwnOAsspAaGVExl_ZHyu97IK6Jsw4TAabJ5JYk4ie33MaUhotlp41yhJslHBebYmJLjLkwIlpkLLnB0J4NNl4NxdCdTsksZbCK6wRDmR7lSgoHeiLedaeQVwL1yifk5UkWSPl06PrFAuvl-lTgv_6rpYlkXI1i3x2N4TLWxHKbWWhZo63UID7_ILHTJj4adbnYtRCpxMMFi8e1A0gDuA.rdAPRos8E1xs8zNwqQwz9dXIIus3_ek13s6tM2DonRs&dib_tag=se&keywords=%E3%82%A4%E3%82%B7%E3%83%A5%E3%83%BC%E3%81%8B%E3%82%89%E3%81%AF%E3%81%98%E3%82%81%E3%82%88&qid=1767932837&s=books&sprefix=%E3%82%A4%E3%82%B7%E3%83%A5%E3%83%BC%E3%81%8B%E3%82%89%E3%81%AF%E3%81%98%E3%82%81%E3%82%88%2Cstripbooks%2C192&sr=1-1",
    },
    // General
    {
      title: "ルドルフとイッパイアッテナ",
      author: "著：斉藤 洋",
      cat: "General",
      color: "bg-yellow-50",
      image: "/book-covers/rudoruhutoixtupaiaxtutena.jpg",
      url: "https://www.amazon.co.jp/%E3%83%AB%E3%83%89%E3%83%AB%E3%83%95%E3%81%A8%E3%82%A4%E3%83%83%E3%83%91%E3%82%A4%E3%82%A2%E3%83%83%E3%83%86%E3%83%8A-%E6%96%89%E8%97%A4-%E6%B4%8B/dp/4061335057/ref=sr_1_1?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=2969UWMNJKIQ3&dib=eyJ2IjoiMSJ9.nxW35U8PwxJVaG2Xx3UGMJmsmUOzlKyLAMpsb94KvY1WTtnRSGnqckOFHdqc_HVnUNgjJt55cFtd0XoiRH_FAQYckbqqCUhPPIoZ74oVyJn1ZKQLgVn0IaXAuZHNzKKsE8D3XfQRGV2aKOO3d9mkld6V0bZDvAGGTH5p5moSgFqEq2-RiYbHBScSgQ0R_pRYyNUrOhmbZT1kRz4jqgZQNl8Zpy6EIblLQKOdsikieCg.4gdMPjELti21op8AerH7ud31EsI2OFEjtIBUrvA1MqY&dib_tag=se&keywords=%E3%83%AB%E3%83%89%E3%83%AB%E3%83%95%E3%81%A8%E3%82%A4%E3%83%83%E3%83%91%E3%82%A4%E3%82%A2%E3%83%83%E3%83%86%E3%83%8A&qid=1767932862&s=books&sprefix=%E3%83%AB%E3%83%89%E3%83%AB%E3%83%95%E3%81%A8%E3%82%A4%E3%83%83%E3%83%91%E3%82%A4%E3%82%A2%E3%83%83%E3%83%86%E3%83%8A%2Cstripbooks%2C199&sr=1-1",
    },
    {
      title: "ルドルフともだちひとりだち",
      author: "著：斉藤 洋",
      cat: "General",
      color: "bg-yellow-50",
      image: "/book-covers/rudoruhutomodachihitoridachi.jpg",
      url: "https://www.amazon.co.jp/%E3%83%AB%E3%83%89%E3%83%AB%E3%83%95-%E3%81%A8%E3%82%82%E3%81%A0%E3%81%A1-%E3%81%B2%E3%81%A8%E3%82%8A%E3%81%A0%E3%81%A1-%E5%85%90%E7%AB%A5%E6%96%87%E5%AD%A6%E5%89%B5%E4%BD%9C%E3%82%B7%E3%83%AA%E3%83%BC%E3%82%BA-%E6%96%89%E8%97%A4/dp/406133509X",
    },
    {
      title: "ルドルフとスノーホワイト",
      author: "著：斉藤 洋",
      cat: "General",
      color: "bg-yellow-50",
      image: "/book-covers/rudoruhutosuno-howaito.jpg",
      url: "https://www.amazon.co.jp/%E3%83%AB%E3%83%89%E3%83%AB%E3%83%95%E3%81%A8%E3%82%B9%E3%83%8E%E3%83%BC%E3%83%9B%E3%83%AF%E3%82%A4%E3%83%88-%E5%85%90%E7%AB%A5%E6%96%87%E5%AD%A6%E5%89%B5%E4%BD%9C%E3%82%B7%E3%83%AA%E3%83%BC%E3%82%BA-%E6%96%89%E8%97%A4-%E6%B4%8B/dp/4061335227/ref=pd_sbs_d_sccl_1_4/356-0570232-2337444?pd_rd_w=7zmRt&content-id=amzn1.sym.06c48127-87ed-46e1-9c82-5caa3f707eab&pf_rd_p=06c48127-87ed-46e1-9c82-5caa3f707eab&pf_rd_r=57PN65YV7PACR8GBCTF4&pd_rd_wg=apV4B&pd_rd_r=d158fada-571f-47e2-b553-5b0fb1aaa6d7&pd_rd_i=4061335227&psc=1",
    },
    {
      title: "ロジカルな話し方超入門",
      author: "著：別所 栄吾",
      cat: "General",
      color: "bg-yellow-50",
      image: "/book-covers/logicaltalkingsuperbasic.jpg",
      url: "https://www.amazon.co.jp/%E3%80%8C%E3%81%8A%E5%89%8D%E3%81%AE%E8%A8%80%E3%81%86%E3%81%93%E3%81%A8%E3%81%AF%E3%82%8F%E3%81%91%E3%81%8C%E3%82%8F%E3%81%8B%E3%82%89%E3%82%93-%E3%80%8D%E3%81%A8%E8%A8%80%E3%82%8F%E3%81%9B%E3%81%AA%E3%81%84%E3%83%AD%E3%82%B8%E3%82%AB%E3%83%AB%E3%81%AA%E8%A9%B1%E3%81%97%E6%96%B9%E8%B6%85%E5%85%A5%E9%96%80-%E5%88%A5%E6%89%80-%E6%A0%84%E5%90%BE/dp/4799324683",
    },
    {
      title: "言葉にできるは武器になる。",
      author: "著：梅田 悟司",
      cat: "General",
      color: "bg-yellow-50",
      image: "/book-covers/kotobanidekiruhabukininaru.jpg",
      url: "https://www.amazon.co.jp/%E3%80%8C%E8%A8%80%E8%91%89%E3%81%AB%E3%81%A7%E3%81%8D%E3%82%8B%E3%80%8D%E3%81%AF%E6%AD%A6%E5%99%A8%E3%81%AB%E3%81%AA%E3%82%8B%E3%80%82-%E6%A2%85%E7%94%B0-%E6%82%9F%E5%8F%B8/dp/4532320755/ref=sr_1_1?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=KF7RTTGO6UKU&dib=eyJ2IjoiMSJ9.ned1KUbBV6xGxmC6AhuoFLh4SOILX3vIBVw6nJqGkdSSSzGcS5VkbHpRuSvupseALox89uzYaOvGUncnwj9lInSSRQlwYy2MlrWKCCOL2Z-a9WJe5xvhzFFNxy1MLVqGLXsaJCqrtfQd2osLZt_kNvqiEGYYVbdjIZh8pPZdca80z_QXEjW92wa8Fg16Vey_1WkJ-MkanN4NX6kWGOxijWlx3upWCHihArSMcNrJYHlVTHolyyzUyFXhnrDqNBlZfyMCEsRbwvnL737Fiv-TcCvI62soq5ZgLjAEw9l84Hg.Llrs_23F4XbWlSzugHz52dBZfWNqnRasMsWhb5Cu9pg&dib_tag=se&keywords=%E8%A8%80%E8%91%89%E3%81%AB%E3%81%A7%E3%81%8D%E3%82%8B%E3%81%AF%E6%AD%A6%E5%99%A8%E3%81%AB%E3%81%AA%E3%82%8B&qid=1767952300&sprefix=%E8%A8%80%E8%91%89%E3%81%AB%E3%81%A7%E3%81%8D%E3%82%8B%E3%81%AF%E6%AD%A6%E5%99%A8%E3%81%AB%E3%81%AA%E3%82%8B%2Caps%2C239&sr=8-1",
    },
    {
      title: "マインドフルネス瞑想入門",
      author: "著：吉田 昌生",
      cat: "General",
      color: "bg-yellow-50",
      image: "/book-covers/maindohurunesumeisounyuumon.jpg",
      url: "https://www.amazon.co.jp/1%E6%97%A510%E5%88%86%E3%81%A7%E8%87%AA%E5%88%86%E3%82%92%E6%B5%84%E5%8C%96%E3%81%99%E3%82%8B%E6%96%B9%E6%B3%95-%E3%83%9E%E3%82%A4%E3%83%B3%E3%83%89%E3%83%95%E3%83%AB%E3%83%8D%E3%82%B9%E7%9E%91%E6%83%B3%E5%85%A5%E9%96%80-%E5%90%89%E7%94%B0-%E6%98%8C%E7%94%9F/dp/4872907310/ref=sr_1_1?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=2MPEKELK0IWUM&dib=eyJ2IjoiMSJ9.URMpl2WYXyc9HBU1aNtvyzvxdiV5XLUSfYu0UGj4IojCU5dBisYQ2KYyLY5xT8k21fAgtlBZk_r2gxnyiPV1fFOJ6n_YsP3XX73qhkEKbdnApAlQrqYpuGUOizlfm8pi8tHh297c25gNMu6cw2q5Fgent-OOZU650-7X_lxYkg5CWknXtvHckV8kzTpUUJcc9pVClQ4EAkhPkb2qP9woiE_mjI_aV_gOP0LUtAQkKyFKctx2psDvagwRRhySzapRYqrGLoGxboZqPhgjPUoPBgwJaQxkSDCZ0PgX9JCX2Gg.tjAQzbGsK3uPoHHtokoYsJnLoPHr3vF1LGYVuzfnBZw&dib_tag=se&keywords=%E3%83%9E%E3%82%A4%E3%83%B3%E3%83%89%E3%83%95%E3%83%AB%E3%83%8D%E3%82%B9%E7%9E%91%E6%83%B3%E5%85%A5%E9%96%80&qid=1767952371&sprefix=%E3%83%9E%E3%82%A4%E3%83%B3%E3%83%89%E3%83%95%E3%83%AB%E3%83%8D%E3%82%B9%E7%9E%91%E6%83%B3%E3%81%AB%E3%82%85%E3%81%86%E3%82%82n%2Caps%2C264&sr=8-1",
    },
    {
      title: "確実内定",
      author: "著：トイアンナ",
      cat: "General",
      color: "bg-yellow-50",
      image: "/book-covers/kakuzitsunaitei.jpg",
      url: "https://www.amazon.co.jp/%E5%B0%B1%E8%81%B7%E6%B4%BB%E5%8B%95%E3%81%8C%E9%9D%A2%E7%99%BD%E3%81%84%E3%81%BB%E3%81%A9%E3%81%86%E3%81%BE%E3%81%8F%E3%81%84%E3%81%8F-%E7%A2%BA%E5%AE%9F%E5%86%85%E5%AE%9A-%E4%BA%8C%E8%A8%82%E7%89%88-%E3%83%88%E3%82%A4%E3%82%A2%E3%83%B3%E3%83%8A/dp/4046068221/ref=sr_1_1?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=2PV5R3HSAFUAQ&dib=eyJ2IjoiMSJ9.vsM2JxZPLn1EhsAOUVCI5vqMFD-Cph52JYkKcfOwfRqbxjIp8u3xIW26BdmqI1NzuJZQOEU6kjoXKccUyV7SvV1LF8EfEJe89itqumFprsgDTRqTDtvmNPiujnKaR6DocR2E5OsvZYJvyKGiWy0Rfg.8rF3wVa9WD4DfgovK3CZnByPn2r5BBRgd3FvgcS9vcA&dib_tag=se&keywords=%E7%A2%BA%E5%AE%9F%E5%86%85%E5%AE%9A&qid=1767952416&sprefix=%E7%A2%BA%E5%AE%9F%E5%86%85%E5%AE%9A%2Caps%2C266&sr=8-1",
    },
    {
      title: "マンガでわかる最強の株入門",
      author: "著：安恒 理",
      cat: "General",
      color: "bg-yellow-50",
      image: "/book-covers/mangadewakarusaikyounokabunyuumon.jpg",
      url: "https://www.amazon.co.jp/%E3%83%9E%E3%83%B3%E3%82%AC%E3%81%A7%E3%82%8F%E3%81%8B%E3%82%8B%E6%9C%80%E5%BC%B7%E3%81%AE%E6%A0%AA%E5%85%A5%E9%96%80-%E5%AE%89%E6%81%92-%E7%90%86/dp/4405102961/ref=sr_1_2_sspa?crid=18UXWNU1DI5CK&dib=eyJ2IjoiMSJ9.X1RS3urwwZJB0QiSxsWHJMlUwQKUFpJ-8vhHQHhJz8WdDYjNv5CUUtVvj3u1pcMNDKxU5TL_sUdGQxHNDlNbj0wFqNWnecicaxNFk2KXDdsvGps2roMXfp3eVAbIwkxC_USTdpfyA317n3zgfZHRXX0-_x-VDRAPCcpVabIc5ChlHimgoEYXaZ3ee0-nlRqBEBJBn5ytfOnlai2yQ4iR_kP1sz2DQrmEjItQRdNiaB9xhgl0tnHP-U_a_os1B6Thnfsrh6wJZRk3_m1zHnks8xu8g_W4qBcQjptrZvJNbHY.c0Bs-pINGonfFhbPyhwDd_90x1uIBN47B2185W6UrGo&dib_tag=se&keywords=%E3%83%9E%E3%83%B3%E3%82%AC%E3%81%A7%E3%82%8F%E3%81%8B%E3%82%8B%E6%9C%80%E5%BC%B7%E3%81%AE%E6%A0%AA%E5%85%A5%E9%96%80&qid=1767952448&sprefix=%E3%83%9E%E3%83%B3%E3%82%AC%2Caps%2C307&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
    },
    {
      title: "80パターンで英語が止まらない！",
      author: "著：塚本 亮",
      cat: "General",
      color: "bg-yellow-50",
      image: "/book-covers/80pata-ndeeigogatomaranai.jpg",
      url: "https://www.amazon.co.jp/%E3%83%8D%E3%82%A4%E3%83%86%E3%82%A3%E3%83%96%E3%81%AA%E3%82%8912%E6%AD%B3%E3%81%BE%E3%81%A7%E3%81%AB%E8%A6%9A%E3%81%88%E3%82%8B-80%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%E3%81%A7%E8%8B%B1%E8%AA%9E%E3%81%8C%E6%AD%A2%E3%81%BE%E3%82%89%E3%81%AA%E3%81%84-%E5%A1%9A%E6%9C%AC-%E4%BA%AE/dp/4471113402/ref=sr_1_1?crid=2HL8QUOSR7FAG&dib=eyJ2IjoiMSJ9.9sIvHME26KnA7lFTNXOGzN_C0BXkr4KqDsniXcSPEHRIi3FjS5nKuWVfNz-hZkuOCL1dM9xIOHrccf8odWYOSF1oO7nl2og-_r_FusmGBtJSk_2dawt_6le9zl4dUVUaLrYDJHyR8JmsAgrvANxamxAmtdK1meje_5t0yQ0UJMdSMpSVBQsq03VrJF0q3XaxJhyzgva2aMzud98hVFG4764iezJiLm0xanCFr0ZYo4cjjH0ZY-N6JqrDx5SIRk1ED-vT8zzRfyAvyjJCchYRMt_0BtMS5lCQGdQVRIIjGwo.-MW34pQgBu63FZEJEZiqR0A_TZPEGEDXjmqit5mNLNc&dib_tag=se&keywords=80%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%E3%81%A7%E8%8B%B1%E8%AA%9E%E3%81%8C%E6%AD%A2%E3%81%BE%E3%82%89%E3%81%AA%E3%81%84&qid=1767952495&sprefix=80%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%2Caps%2C282&sr=8-1",
    },
    {
      title: "東京都同情塔",
      author: "著：九段 理江",
      cat: "General",
      color: "bg-yellow-50",
      image: "/book-covers/tokyo-to_dojo-to.jpg",
      url: "https://www.amazon.co.jp/%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%90%8C%E6%83%85%E5%A1%94-%E4%B9%9D%E6%AE%B5-%E7%90%86%E6%B1%9F/dp/4103555114",
    },
    {
      title: "世界のエリートが学んでいる教養書必読100冊を1冊にまとめてみた",
      author: "著：永井 孝尚",
      cat: "General",
      color: "bg-yellow-50",
      image: "/book-covers/liberalarts.jpg",
      url: "https://www.amazon.co.jp/%E4%B8%96%E7%95%8C%E3%81%AE%E3%82%A8%E3%83%AA%E3%83%BC%E3%83%88%E3%81%8C%E5%AD%A6%E3%82%93%E3%81%A7%E3%81%84%E3%82%8B-%E6%95%99%E9%A4%8A%E6%9B%B8%E5%BF%85%E8%AA%AD100%E5%86%8A%E3%82%921%E5%86%8A%E3%81%AB%E3%81%BE%E3%81%A8%E3%82%81%E3%81%A6%E3%81%BF%E3%81%9F-%E6%B0%B8%E4%BA%95%E5%AD%9D%E5%B0%9A/dp/4046055529/ref=sr_1_1?crid=1D9DLV5FZJCIS&dib=eyJ2IjoiMSJ9.OOAaJ3wfTMkQgczLY_tREK7PVWAmsJOdxrjF2bV0jSevPKym2g94i74FiW4UaKvObDTwscQ-vtC6keynV3CMq89GR1ipTwNHxa5G1I699sFLUU9sRykS0PZHU4bIhf9roND4tDmZyOwk3cnzTahLT5Et29WrvudQHbxcaeM16CcKFH_5pkTIakJ9SZsxpwJy.xR7K9d6yuCnIpEcl5OADa03Xyi-qz6ajf8Q38VwZ-es&dib_tag=se&keywords=%E4%B8%96%E7%95%8C%E3%81%AE%E3%82%A8%E3%83%AA%E3%83%BC%E3%83%88%E3%81%8C%E5%AD%A6%E3%82%93%E3%81%A7%E3%81%84%E3%82%8B%E6%95%99%E9%A4%8A%E6%9B%B8%E5%BF%85%E8%AA%AD100%E5%86%8A%E3%82%921%E5%86%8A%E3%81%AB%E3%81%BE%E3%81%A8%E3%82%81%E3%81%A6%E3%81%BF%E3%81%9F&qid=1767952569&s=books&sprefix=%E4%B8%96%E7%95%8C%E3%81%AE%E3%82%A8%E3%83%AA%E3%83%BC%E3%83%88%E3%81%8C%2Cstripbooks%2C255&sr=1-1",
    },
    {
      title: "スティグリッツ入門経済学 第4版",
      author: "著：J.E.スティグリッツ 他",
      cat: "General",
      color: "bg-yellow-50",
      image: "/book-covers/Stiglitz_Introduction_to_Economics.jpg",
      url: "https://www.amazon.co.jp/%E3%82%B9%E3%83%86%E3%82%A3%E3%82%B0%E3%83%AA%E3%83%83%E3%83%84%E5%85%A5%E9%96%80%E7%B5%8C%E6%B8%88%E5%AD%A6-%E7%AC%AC4%E7%89%88-%E3%82%B8%E3%83%A7%E3%82%BB%E3%83%95-%E3%82%B9%E3%83%86%E3%82%A3%E3%82%B0%E3%83%AA%E3%83%83%E3%83%84/dp/4492314199/ref=sr_1_1?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=2UYR2UFIC8I6M&dib=eyJ2IjoiMSJ9.qO98giwskFwzmzatlQxo34B-Vr7qewDGFe8Nqtzo1HIpIZNkPkO0pv6rq7cM05C-Gf6Wy5WqYtp06tHC3e92LVVnYylKvS9q2XJ6Xqf4ZXeTbZSmxS7gU46Y8WXeSqpw1q8OyVBvFfnyjaSCx9GTMeO2T3xHXZBge14edfb4AqT0oIM_4HxNErhO6JEEF8nCIqVhANAXlEY1M_OCzHE_QCaYR5_RllMSdNrfVKoZSXQM8EfL2huUmCHjfmPRJ138I17svLCHLVgfwFjTlL--jeB-xi4oUy4pIC4du9glMS8.znNSogpZcx8iaejhgBOmdxsfBQRVtbSuUQwasoORFkQ&dib_tag=se&keywords=%E3%82%B9%E3%83%86%E3%82%A3%E3%82%B0%E3%83%AA%E3%83%83%E3%83%84%E5%85%A5%E9%96%80%E7%B5%8C%E6%B8%88%E5%AD%A6&qid=1767952328&sprefix=%E3%82%B9%E3%83%86%E3%82%A3%E3%82%B0%E3%83%AA%E3%83%83%E3%83%84%E5%85%A5%E9%96%80%E7%B5%8C%E6%B8%88%E5%AD%A6%2Caps%2C256&sr=8-1",
    },
  ];
  return (
    <div className="pt-24 pb-20 bg-warm-bg min-h-screen">
      <div className="container-custom">
        <h1 className="text-4xl font-bold mb-4 text-center">紅べこの本棚</h1>
        <p className="text-center text-gray-500 mb-12">
          私が読ませてもらった書籍たち。
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {books.map((book, idx) => (
            <motion.a
              key={idx}
              href={book.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className={`${book.color} p-4 flex flex-col justify-between relative group hover:shadow-lg transition-shadow border border-gray-100 cursor-pointer h-auto min-h-[350px] block`}
            >
              <div className="flex flex-col h-full">
                <span className="text-xs font-bold uppercase text-gray-400 tracking-wider bg-white/50 px-2 py-1 rounded-sm self-start">
                  {book.cat}
                </span>
                <h3 className="text-sm font-bold mt-2 leading-tight text-gray-800 group-hover:text-bain-red transition-colors">
                  {book.title}
                </h3>
                <p className="text-xs text-gray-600 mt-1 mb-2">{book.author}</p>

                <div className="relative w-full aspect-[2/3] mt-auto shadow-md overflow-hidden rounded-sm">
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <ArrowUpRight className="absolute top-6 right-6 text-gray-300 group-hover:text-bain-red transition-colors" />
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
