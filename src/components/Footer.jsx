import React from 'react';

const Footer = () => {
  return (
    // bg-gray-100: Цайвар саарал дэвсгэр
    // text-gray-600: Зөөлөн саарал үсэг
    // p-8 md:p-12: Доторх зай
    // border-t: Дээд талын хүрээ
    <footer className="bg-gray-100 text-gray-600 p-8 md:p-12 border-t">
      {/* max-w-7xl: Хамгийн их өргөн (том дэлгэцэнд) */}
      {/* mx-auto: Голлуулах */}
      <div className="max-w-7xl mx-auto">
        {/* grid, grid-cols-1, md:grid-cols-2, lg:grid-cols-4, gap-8: Responsive багана үүсгэх */}
        <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: About Us */}
          <div className="footer-column">
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Мэдээ, мэдээлэл</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-900 hover:underline">Бидний тухай</a></li>
              <li><a href="#" className="hover:text-gray-900 hover:underline">Мэдээ</a></li>
              <li><a href="#" className="hover:text-gray-900 hover:underline">Ажлын байр</a></li>
            </ul>
          </div>

          {/* Column 2: Services */}
          <div className="footer-column">
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Үйлчилгээ</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-900 hover:underline">Үйлчилгээний нөхцөл</a></li>
              <li><a href="#" className="hover:text-gray-900 hover:underline">Нууцлалын бодлого</a></li>
              <li><a href="#" className="hover:text-gray-900 hover:underline">Хүргэлт, буцаалт</a></li>
              <li><a href="#" className="hover:text-gray-900 hover:underline">Бэлгийн карт</a></li>
            </ul>
          </div>

          {/* Column 3: Customer Help */}
          <div className="footer-column">
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Хэрэглэгчийн туслах</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-900 hover:underline">Түгээмэл асуулт</a></li>
              <li><a href="#" className="hover:text-gray-900 hover:underline">Бүтээгдэхүүний арчилгаа</a></li>
              <li><a href="#" className="hover:text-gray-900 hover:underline">Сэтгэгдэл илгээх</a></li>
              <li><a href="#" className="hover:text-gray-900 hover:underline">Захиалгын заавар</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="footer-column">
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Холбоо барих</h4>
            <div className="space-y-2 text-sm">
              <p>9999-9999</p>
              <p><a href="mailto:info@ubcarpet.mn" className="hover:text-gray-900 hover:underline">info@ubcarpet.mn</a></p>
              <p>Монгол улс, Улаанбаатар хот</p>
              <p><a href="#" className="hover:text-gray-900 hover:underline">Салбар дэлгүүрийн байршил</a></p>
            </div>
          </div>
        </div>

        {/* Доод хэсэг */}
        <div className="mt-12 pt-8 border-t text-center text-sm">
          <p>&copy; {new Date().getFullYear()} UBCARPETA. Бүх эрх хуулиар хамгаалагдсан.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;