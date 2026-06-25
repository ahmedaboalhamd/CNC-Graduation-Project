# شرح أكواد نظام تسجيل الدخول ولوحة تحكم المستخدم

هذا الملف مصمم خصيصاً لك لكي تتمكن من دراسة وفهم الأكواد التي أضفناها مؤخراً (Login, Register, UserDashboard). الشرح مقسم إلى الأجزاء الأساسية لتبسيط الفهم.

---

## 1. التعامل مع التوجيه والروابط (Routing & Navbar)
### أ. ملف `App.jsx`
هذا الملف هو نقطة التجمع الأساسية لكل الصفحات في تطبيق React. استخدمنا فيه `react-router-dom` للتنقل بين الصفحات بدون الحاجة لإعادة تحميل الموقع (Single Page Application).
- **ماذا فعلنا؟** قمنا باستدعاء مكونات (Components) الصفحات الجديدة:
  ```javascript
  import Login from './components/Login';
  import Register from './components/Register';
  import UserDashboard from './components/UserDashboard';
  ```
- ثم وضعناها داخل `Routes` ليتم عرضها عندما يزور المستخدم الرابط الخاص بها (مثل `/login`):
  ```javascript
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
  <Route path="/user-dashboard" element={<UserDashboard />} />
  ```

### ب. شريط التنقل `Navbar.jsx`
- أضفنا أزرار "Sign In" و "Sign Up" وربطناها باستخدام `Link` (والتي تشبه وسم `<a>` في الـ HTML ولكنها أسرع ولا تعيد تحميل الصفحة).

---

## 2. صفحة تسجيل الدخول (`Login.jsx`)
هذه الصفحة مسؤولة عن أخذ بيانات المستخدم (الإيميل والباسورد) لتحقق من صحتها.

### المفاهيم البرمجية المستخدمة:
- **`useState`**: هو "Hook" (أداة في React) نستخدمها لحفظ بيانات النموذج (Form).
  ```javascript
  const [formData, setFormData] = useState({ email: '', password: '' });
  ```
- **`useNavigate`**: أداة نستخدمها لنقل المستخدم برمجياً لصفحة أخرى (مثل نقله لصفحة Dashboard بعد نجاح الدخول).
  ```javascript
  const navigate = useNavigate();
  // ... بعد نجاح التسجيل
  navigate('/user-dashboard');
  ```
- **دالة `handleChange`**: هذه الدالة تعمل كلما قام المستخدم بكتابة حرف في أي حقل، وتقوم بتحديث حالة `formData` بناءً على اسم الحقل (`name`).
- **دالة `handleSubmit`**: هذه الدالة تتفعل عندما يضغط المستخدم على زر الدخول. تمنع تحديث الصفحة الافتراضي (`e.preventDefault()`) وتقوم بعملية التحويل.

---

## 3. صفحة إنشاء حساب (`Register.jsx`)
تشبه صفحة الـ Login كثيراً ولكنها تحتوي على حقول أكثر وتتميز بوجود "قائمة منسدلة" (Dropdown) لاختيار الصلاحيات (Role).

### الجزء المميز:
- أضفنا الصلاحية `role` للـ `useState` الافتراضي كـ `user`:
  ```javascript
  const [formData, setFormData] = useState({
    username: '', email: '', password: '', role: 'user'
  });
  ```
- قمنا بعمل حقل من نوع `<select>` ليختار المستخدم بين User أو Admin. القيمة المحددة هنا يتم حفظها أيضاً بفضل الدالة الذكية `handleChange`.

---

## 4. لوحة تحكم المستخدم (`UserDashboard.jsx`)
هذه هي الصفحة الأهم حيث يمكن للمستخدم رفع ملفات التصميم الخاصة بالـ CNC (مثل gcode).

### المفاهيم البرمجية المستخدمة في الرفع:
- **حفظ الملف**: نستخدم `useState` لنحفظ الملف الذي اختاره المستخدم `const [file, setFile] = useState(null)`.
- **ميزة السحب والإفلات (Drag & Drop)**:
  لجعل الصفحة تدعم سحب الملفات، استخدمنا أحداث المتصفح:
  - `onDragOver`: نستخدمها فقط لمنع السلوك الافتراضي للمتصفح (الذي كان سيقوم بفتح الملف في صفحة جديدة).
  - `onDrop`: عندما يُفلت المستخدم الملف، نأخذ الملف ونحفظه في الحالة `setFile(e.dataTransfer.files[0])`.
- **اختيار ملف بالطريقة التقليدية**:
  وضعنا وسم `<input type="file">` مخفي داخل زر أنيق. عندما تختار الملف تتفعل دالة `handleFileChange`.
  ```javascript
  <input type="file" className="hidden" accept=".gcode,.nc,.dxf,.svg" onChange={handleFileChange} />
  ```
  *لاحظ أننا حددنا صيغ معينة للملفات باستخدام `accept`*.
- **محاكاة التحميل**:
  عندما يضغط المستخدم على "Upload to Database"، قمنا بتفعيل دالة `setTimeout` لكي نجعل الزر يعرض كلمة "Uploading..." لمدة ثانيتين (لمحاكاة وقت الرفع للإنترنت)، وبعدها نظهر علامة نجاح خضراء!

---

### ملخص الأيقونات والتصميم
- استخدمنا مكتبة `lucide-react` للحصول على أيقونات جميلة وخفيفة مثل أيقونة القفل (`Lock`) والملف (`File`).
- استخدمنا مكتبة `framer-motion` لإعطاء تأثيرات حركة ناعمة (`motion.div`) عند ظهور العناصر لأول مرة على الشاشة.
- استخدمنا الـ `Tailwind CSS` بشكل مكثف لعمل الستايلات وتفعيل وضع الـ Dark Mode.

> **نصيحة للمذاكرة:** قم بفتح ملف `UserDashboard.jsx` وحاول تغيير مدة المحاكاة (`setTimeout`) أو تغيير صيغ الملفات المسموحة لتختبر فهمك للكود!
