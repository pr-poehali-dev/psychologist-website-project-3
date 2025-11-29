import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState<string>("home");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Decorative metamorphosis symbols */}
      <div className="fixed top-20 left-0 w-32 h-32 opacity-10 pointer-events-none z-0 animate-float">
        <img src="https://cdn.poehali.dev/projects/669710ca-3a7c-4e6d-bbf6-6df17776da53/files/d67868e0-d827-473b-a7ec-4c6958928b41.jpg" alt="" className="w-full h-full object-contain" />
      </div>
      <div className="fixed bottom-20 right-0 w-40 h-40 opacity-10 pointer-events-none z-0 animate-butterfly">
        <img src="https://cdn.poehali.dev/projects/669710ca-3a7c-4e6d-bbf6-6df17776da53/files/22bc8d26-7eb4-469e-bea8-45a543fe041d.jpg" alt="" className="w-full h-full object-contain" />
      </div>
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-primary">Авшалом Елена</h2>
            <div className="hidden md:flex gap-8">
              {[
                { name: "Главная", id: "home" },
                { name: "Обо мне", id: "about" },
                { name: "Услуги", id: "services" },
                { name: "Методологии", id: "methods" },
                { name: "Контакты", id: "contact" }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    activeSection === item.id ? "text-accent" : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-accent hover:bg-accent/90"
            >
              Записаться
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6 relative">
        <div className="container mx-auto">
          {/* Hero metamorphosis illustration */}
          <div className="relative flex justify-between items-center mb-12 animate-fade-in max-w-6xl mx-auto" style={{height: '200px'}}>
            <div className="w-1/4 flex justify-start">
              <svg className="w-32 h-32 text-accent caterpillar-crawl" viewBox="0 0 120 60" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="15" cy="30" r="8" strokeWidth="1.2"/>
                <circle cx="30" cy="30" r="9" strokeWidth="1.2"/>
                <circle cx="47" cy="30" r="10" strokeWidth="1.2"/>
                <circle cx="65" cy="30" r="10" strokeWidth="1.2"/>
                <circle cx="83" cy="30" r="9" strokeWidth="1.2"/>
                <circle cx="98" cy="30" r="8" strokeWidth="1.2"/>
                <line x1="10" y1="22" x2="8" y2="15" strokeWidth="1"/>
                <line x1="20" y1="22" x2="18" y2="15" strokeWidth="1"/>
                <circle cx="12" cy="27" r="1.5" fill="currentColor"/>
                <circle cx="18" cy="27" r="1.5" fill="currentColor"/>
                <path d="M 10 33 Q 15 36 20 33" strokeWidth="1" fill="none"/>
              </svg>
            </div>
            <div className="w-2/4 flex justify-center">
              <svg className="h-48 w-auto text-primary opacity-90" viewBox="0 0 80 200" fill="none" stroke="currentColor" strokeWidth="1.5">
                <ellipse cx="40" cy="100" rx="25" ry="75" strokeWidth="1.5"/>
                <path d="M 40 25 Q 45 40 40 55" strokeWidth="1" opacity="0.6"/>
                <path d="M 40 55 Q 35 70 40 85" strokeWidth="1" opacity="0.6"/>
                <path d="M 40 85 Q 45 100 40 115" strokeWidth="1" opacity="0.6"/>
                <path d="M 40 115 Q 35 130 40 145" strokeWidth="1" opacity="0.6"/>
                <path d="M 40 145 Q 45 160 40 175" strokeWidth="1" opacity="0.6"/>
                <ellipse cx="40" cy="40" rx="8" ry="12" strokeWidth="0.8" opacity="0.4"/>
                <ellipse cx="40" cy="70" rx="10" ry="15" strokeWidth="0.8" opacity="0.4"/>
                <ellipse cx="40" cy="100" rx="12" ry="18" strokeWidth="0.8" opacity="0.4"/>
                <ellipse cx="40" cy="130" rx="10" ry="15" strokeWidth="0.8" opacity="0.4"/>
                <ellipse cx="40" cy="160" rx="8" ry="12" strokeWidth="0.8" opacity="0.4"/>
              </svg>
            </div>
            <div className="w-1/4 flex justify-end">
              <svg className="w-32 h-32 text-accent butterfly-fly" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
                <ellipse cx="50" cy="50" rx="2" ry="15" fill="currentColor"/>
                <line x1="50" y1="35" x2="48" y2="28" strokeWidth="1"/>
                <line x1="50" y1="35" x2="52" y2="28" strokeWidth="1"/>
                <circle cx="48" cy="27" r="1.5" fill="currentColor"/>
                <circle cx="52" cy="27" r="1.5" fill="currentColor"/>
                <path d="M 50 38 Q 25 28 18 42 Q 15 52 22 60 Q 30 65 42 58 Q 48 50 50 45 Z" className="wing-left" strokeWidth="1.2"/>
                <path d="M 50 38 Q 75 28 82 42 Q 85 52 78 60 Q 70 65 58 58 Q 52 50 50 45 Z" className="wing-right" strokeWidth="1.2"/>
                <path d="M 50 52 Q 28 58 20 70 Q 18 78 25 82 Q 35 84 45 75 Q 49 65 50 58 Z" className="wing-left" strokeWidth="1.2"/>
                <path d="M 50 52 Q 72 58 80 70 Q 82 78 75 82 Q 65 84 55 75 Q 51 65 50 58 Z" className="wing-right" strokeWidth="1.2"/>
                <ellipse cx="30" cy="48" rx="6" ry="8" strokeWidth="0.8" opacity="0.5"/>
                <ellipse cx="70" cy="48" rx="6" ry="8" strokeWidth="0.8" opacity="0.5"/>
                <ellipse cx="32" cy="72" rx="5" ry="6" strokeWidth="0.8" opacity="0.5"/>
                <ellipse cx="68" cy="72" rx="5" ry="6" strokeWidth="0.8" opacity="0.5"/>
              </svg>
            </div>
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-accent/30 via-primary/30 to-accent/30 -z-10"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge variant="secondary" className="text-sm px-4 py-1">
                Кандидат психологических наук
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-primary leading-tight">
                Авшалом Елена
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Психолог с 25-летним стажем. Помогаю людям пройти путь трансформации — 
                от кокона к свободе, через научно обоснованные методы терапии.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90"
                  onClick={() => scrollToSection("contact")}
                >
                  Записаться на консультацию
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => scrollToSection("about")}
                >
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in flex justify-center lg:justify-end">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/10 rounded-3xl blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/files/198cdd67-fa51-4c92-b409-7e2fff7c99be.jpg"
                alt="Авшалом Елена"
                className="relative rounded-3xl shadow-2xl w-full max-w-md object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "Award", title: "25 лет опыта", desc: "Более 5000 успешных консультаций" },
              { icon: "GraduationCap", title: "Научный подход", desc: "Кандидат психологических наук" },
              { icon: "Shield", title: "Конфиденциальность", desc: "Полная анонимность и этика" }
            ].map((item, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in">
                <CardContent className="pt-8 pb-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center">
                    <Icon name={item.icon as any} size={32} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-primary mb-4">С какими запросами я работаю</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Специализируюсь на решении сложных жизненных ситуаций с применением 
              современных психотерапевтических методик
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "Heart", title: "Отношения и семья", desc: "Кризисы в паре, развод, поиск партнера" },
              { icon: "Flame", title: "Выгорание", desc: "Профессиональное и эмоциональное истощение" },
              { icon: "Wind", title: "Тревожность", desc: "Панические атаки, тревожные расстройства" },
              { icon: "Users", title: "Одиночество", desc: "Сложности в установлении контактов" },
              { icon: "TrendingUp", title: "Личностный рост", desc: "Поиск себя, смена жизненного пути" },
              { icon: "AlertCircle", title: "Жизненные кризисы", desc: "Потери, травмы, сложные решения" }
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1 animate-fade-in">
                <CardContent className="pt-6 pb-6 space-y-3">
                  <Icon name={item.icon as any} size={28} className="text-accent" />
                  <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/669710ca-3a7c-4e6d-bbf6-6df17776da53/files/41d2766b-b189-4bd1-850a-aad1373a275d.jpg"
                alt="Кабинет психолога"
                className="rounded-3xl shadow-2xl w-full object-cover"
              />
            </div>
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl font-bold text-primary">Обо мне</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  За 25 лет практики я помогла более 5000 людям найти выход из сложных 
                  жизненных ситуаций. Моя специализация — работа с глубинными запросами, 
                  требующими системного подхода и длительной терапии.
                </p>
                <p>
                  Я защитила кандидатскую диссертацию по теме "Психологические аспекты 
                  преодоления личностных кризисов в период взрослости" и продолжаю 
                  активную научную деятельность.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-primary">Регалии и достижения</h3>
                <ul className="space-y-2">
                  {[
                    "Кандидат психологических наук (МГУ, 2005)",
                    "Член Российского психологического общества",
                    "Автор 47 научных публикаций",
                    "Спикер на 15+ международных конференциях",
                    "Супервизор практикующих психологов"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Icon name="CheckCircle" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-primary mb-4">Форматы консультаций</h2>
            <p className="text-lg text-muted-foreground">
              Выберите удобный для вас способ работы
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: "MapPin",
                title: "Очная консультация",
                duration: "50 минут",
                price: "7 000 ₽",
                desc: "Личная встреча в уютном кабинете в центре Москвы"
              },
              {
                icon: "Video",
                title: "Онлайн-консультация",
                duration: "50 минут",
                price: "6 000 ₽",
                desc: "Видеосвязь через безопасную платформу из любой точки мира"
              },
              {
                icon: "Users",
                title: "Семейная терапия",
                duration: "80 минут",
                price: "10 000 ₽",
                desc: "Работа с парой или семьей для решения общих вопросов"
              },
              {
                icon: "UsersRound",
                title: "Групповая сессия",
                duration: "90 минут",
                price: "3 500 ₽",
                desc: "Тематические группы до 8 человек"
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all animate-fade-in">
                <CardContent className="pt-8 pb-8 space-y-4">
                  <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center">
                    <Icon name={service.icon as any} size={28} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-primary mb-1">{service.title}</h3>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Icon name="Clock" size={16} />
                        {service.duration}
                      </span>
                      <span className="text-accent font-semibold text-lg">{service.price}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{service.desc}</p>
                  <Button 
                    className="w-full bg-accent hover:bg-accent/90"
                    onClick={() => scrollToSection("contact")}
                  >
                    Записаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="methods" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-primary mb-4">Как я работаю</h2>
            <p className="text-lg text-muted-foreground">
              Научно обоснованные методы, подтвержденные десятилетиями практики
            </p>
          </div>

          <div className="space-y-8 mb-16 relative">
            {/* Metamorphosis journey visualization */}
            <div className="flex justify-center items-center mb-8 gap-4 px-4">
              <div className="text-center animate-fade-in">
                <div className="text-5xl mb-2">🐛</div>
                <p className="text-xs text-muted-foreground font-medium">Начало</p>
              </div>
              <div className="flex-1 h-0.5 bg-gradient-to-r from-accent/50 to-primary/50 max-w-xs"></div>
              <div className="text-center animate-fade-in">
                <div className="text-5xl mb-2">🦋</div>
                <p className="text-xs text-muted-foreground font-medium">Трансформация</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { num: "1", title: "Запись", desc: "Оставьте заявку удобным способом", emoji: "📝" },
                { num: "2", title: "Первая сессия", desc: "Знакомство и диагностика запроса", emoji: "🤝" },
                { num: "3", title: "Курс терапии", desc: "Системная работа по плану", emoji: "🌱" },
                { num: "4", title: "Результат", desc: "Достижение желаемых изменений", emoji: "✨" }
              ].map((step, index) => (
                <div key={index} className="text-center space-y-3 animate-fade-in">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    {step.emoji}
                  </div>
                  <h3 className="font-semibold text-primary">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 mb-16 animate-fade-in">
            <h3 className="text-2xl font-semibold text-primary">Применяемые методологии</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  name: "КПТ (Когнитивно-поведенческая терапия)",
                  desc: "Работа с деструктивными мыслями и поведением"
                },
                {
                  name: "Гештальт-терапия",
                  desc: "Осознавание себя здесь и сейчас, завершение гештальтов"
                },
                {
                  name: "Психодинамическая терапия",
                  desc: "Глубинная работа с бессознательными процессами"
                },
                {
                  name: "EMDR",
                  desc: "Десенсибилизация травм через движения глаз"
                }
              ].map((method, index) => (
                <Card key={index} className="border-l-4 border-l-accent">
                  <CardContent className="pt-4 pb-4">
                    <h4 className="font-semibold text-primary mb-1">{method.name}</h4>
                    <p className="text-sm text-muted-foreground">{method.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold text-primary mb-6">Частые вопросы</h3>
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  q: "Сколько длится курс терапии?",
                  a: "Продолжительность зависит от запроса. В среднем для решения конкретной проблемы требуется 10-15 сессий. Глубинная терапия может занять от 6 месяцев до 2 лет."
                },
                {
                  q: "Как часто нужно встречаться?",
                  a: "Рекомендуемая частота — 1 раз в неделю. При острых состояниях возможны встречи 2 раза в неделю. На завершающем этапе интервал увеличивается до 2 недель."
                },
                {
                  q: "Гарантируете ли вы результат?",
                  a: "Результат психотерапии зависит от многих факторов, включая вашу готовность к изменениям. Я гарантирую профессиональный подход и использование эффективных методик, но не могу обещать конкретные сроки."
                },
                {
                  q: "Какая гарантия конфиденциальности?",
                  a: "Я строго соблюдаю профессиональную этику. Вся информация защищена врачебной тайной и не разглашается третьим лицам без вашего письменного согласия."
                },
                {
                  q: "Можно ли отменить или перенести сессию?",
                  a: "Да, при предупреждении за 24 часа. При отмене менее чем за 24 часа сессия оплачивается полностью."
                }
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold text-primary hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-primary mb-4">Записаться на консультацию</h2>
            <p className="text-lg text-muted-foreground">
              Заполните форму, и я свяжусь с вами в течение 24 часов
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="shadow-xl animate-scale-in">
              <CardContent className="pt-8 pb-8">
                <form 
                  className="space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    const name = formData.get('name');
                    const phone = formData.get('phone');
                    const email = formData.get('email');
                    const message = formData.get('message');
                    
                    const text = `Новая заявка с сайта!\n\nИмя: ${name}\nТелефон: ${phone}\nEmail: ${email}\nЗапрос: ${message}`;
                    const whatsappUrl = `https://wa.me/79268260233?text=${encodeURIComponent(text)}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                >
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary">Ваше имя</label>
                    <Input name="name" placeholder="Как к вам обращаться?" className="h-12" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary">Телефон</label>
                    <Input name="phone" placeholder="+7 (___) ___-__-__" className="h-12" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary">Email</label>
                    <Input name="email" type="email" placeholder="your@email.com" className="h-12" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary">Краткое описание запроса</label>
                    <Textarea 
                      name="message"
                      placeholder="Расскажите, с чем хотели бы поработать..."
                      className="min-h-32 resize-none"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full h-12 bg-accent hover:bg-accent/90 text-base">
                    Отправить через WhatsApp
                    <Icon name="Send" className="ml-2" size={18} />
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8 animate-fade-in">
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-6">Контактная информация</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={22} className="text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-primary">Телефон / WhatsApp</p>
                      <a href="https://wa.me/79268260233" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">+7 (926) 826-02-33</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={22} className="text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-primary">Email</p>
                      <a href="mailto:avshalom.elena@mail.ru" className="text-muted-foreground hover:text-accent transition-colors">avshalom.elena@mail.ru</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={22} className="text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-primary">Адрес кабинета</p>
                      <p className="text-muted-foreground">
                        Москва, Бульвар Академика Ландау, д. 3
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" size={22} className="text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-primary">Часы работы</p>
                      <p className="text-muted-foreground">
                        Пн-Пт: 10:00 - 20:00<br />
                        Сб: 11:00 - 17:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t">
                <h4 className="font-semibold text-primary mb-4">Социальные сети</h4>
                <div className="flex gap-4">
                  {["MessageCircle", "Instagram", "Mail"].map((social, index) => (
                    <button
                      key={index}
                      className="w-12 h-12 bg-accent/10 hover:bg-accent hover:text-white rounded-full flex items-center justify-center transition-all"
                    >
                      <Icon name={social as any} size={22} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 bg-primary text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Авшалом Елена</h3>
              <p className="text-white/80 text-sm">
                Психолог, кандидат наук.<br />
                Помогаю найти путь к гармонии.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <div className="space-y-2 text-sm">
                {["Главная", "Обо мне", "Услуги", "Методологии", "Контакты"].map((link, index) => (
                  <button
                    key={index}
                    className="block text-white/80 hover:text-white transition-colors"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Профессиональное сообщество</h4>
              <div className="text-sm space-y-2 text-white/80">
                <p>Член РПО</p>
                <p>Супервизор практиков</p>
                <p>Научный консультант</p>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/20 text-center text-sm text-white/60">
            <p>© 2024 Авшалом Елена. Все права защищены.</p>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        <button
          onClick={() => scrollToSection("contact")}
          className="w-16 h-16 bg-accent hover:bg-accent/90 text-white rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 animate-fade-in group"
          aria-label="Записаться на консультацию"
        >
          <Icon name="Calendar" size={28} className="group-hover:scale-110 transition-transform" />
        </button>
        <a
          href="https://wa.me/79268260233"
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 animate-fade-in group"
          aria-label="Написать в WhatsApp"
        >
          <Icon name="MessageCircle" size={28} className="group-hover:scale-110 transition-transform" />
        </a>
      </div>
    </div>
  );
};

export default Index;