import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title:
      "Клапан синтетического масла Woodward ГТД RB211-24G / Woodward synthetic oil valve GTD RB211-24G",
    paragraph: `
      В газотурбинных двигателях (ГТД) RB211-24G, используемых, в частности, в газоперекачивающих агрегатах, клапаны Woodward, регулирующие подачу синтетического масла, являются частью системы смазки и управления. В зависимости от конкретной функции, такой клапан может управлять потоком масла для смазки подшипников, регулировать давление или даже управлять положением лопаток входного направляющего аппарата (IGV). / In RB211-24G gas turbine engines (GTEs) used, in particular, in gas pumping units, Woodward valves that regulate the supply of synthetic oil are part of the lubrication and control system. Depending on the specific function, such a valve can control the oil flow for lubricating bearings, regulate pressure, or even control the position of the inlet guide vanes (IGV).
    `,
    details: `
      Основные функции. Управление потоком масла для смазки: В RB211 система смазки и охлаждения обеспечивает циркуляцию синтетического масла через газогенератор для смазки и охлаждения подшипников. Клапан Woodward может регулировать подачу масла для поддержания оптимальных условий смазки.
Гидравлическое управление: В некоторых системах масло может использоваться в качестве гидравлической жидкости. Часть масла может подаваться под высоким давлением (например, 750 фунтов на квадратный дюйм) для управления положением лопаток входного направляющего аппарата (IGV). Клапан Woodward в этом случае будет управлять потоком масла к исполнительному механизму IGV.
Регулирование давления: Клапан может поддерживать давление масла в системе в заданных пределах, например, 240 фунтов на квадратный дюйм для смазки. Это предотвращает повреждение компонентов, вызванное чрезмерным давлением.
Защита от сбоев: При потере давления масла или другой неисправности клапан может срабатывать, инициируя отключение системы, чтобы предотвратить повреждение турбины.
Надёжное управление: Клапаны Woodward известны своей надёжностью и точностью, что крайне важно в системах управления ГТД. 
Принцип работы. В зависимости от типа клапана Woodward, он может работать по разным принципам:
Сервоклапан: Работает на электрогидравлическом принципе. Электронный блок управления (контроллер Woodward) посылает электрический сигнал, который управляет потоком гидравлического масла.
Клапан-регулятор: Работает на основе обратной связи. Клапан измеряет давление и автоматически регулирует поток масла для поддержания его на заданном уровне.
Отрезной клапан: Используется для быстрого перекрытия потока масла, например, в аварийных ситуациях. 
В целом, клапан Woodward для синтетического масла в ГТД RB211-24G представляет собой точный и надёжный компонент, который управляет потоком и давлением масла, обеспечивая смазку, охлаждение и гидравлическое управление в различных системах двигателя. / 
Main functions. Control of oil flow for lubrication: In the RB211, the lubrication and cooling system circulates synthetic oil through the gas generator to lubricate and cool the bearings. The Woodward valve can regulate the oil supply to maintain optimal lubrication conditions.
Hydraulic control: In some systems, oil may also serve as a hydraulic fluid. A portion of the oil can be supplied under high pressure (for example, 750 psi) to control the position of the inlet guide vanes (IGV). In this case, the Woodward valve regulates the oil flow to the IGV actuator.
Pressure regulation: The valve can maintain oil pressure within specified limits, for example, around 240 psi for lubrication. This prevents component damage caused by excessive pressure.
Failure protection: In the event of oil pressure loss or another malfunction, the valve can trigger a system shutdown to prevent turbine damage.
Reliable control: Woodward valves are known for their reliability and precision, which is critical in gas turbine control systems.
Operating principle. Depending on the type of Woodward valve, it may operate on different principles:
Servo valve: Operates on an electrohydraulic principle. The electronic control unit (Woodward controller) sends an electrical signal that controls the flow of hydraulic oil.
Regulating valve: Operates on a feedback principle. The valve senses the pressure and automatically adjusts the oil flow to maintain it at the set level.
Shutoff valve: Used for rapid interruption of oil flow, for example, in emergency situations.
In general, the Woodward synthetic oil valve in the RB211-24G gas turbine is a precise and reliable component that controls oil flow and pressure, ensuring lubrication, cooling, and hydraulic control across various engine systems.
    `,
    image: "/images/blog/test.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "2025",
  },

  {
    id: 2,
    title:
      "Регулятор перепускного клапана выхлопных газов ГПЭС Caterpillar G3516 / Exhaust gas bypass valve of Caterpillar G3516 gas piston power station",
    paragraph: `
      Пропускной клапан выхлопного газа (wastegate) на газогенераторе Caterpillar G3516 играет важную роль в управлении турбокомпрессором. / The wastegate valve on the Caterpillar G3516 gas generator plays an important role in controlling the turbocharger.
    `,
    details: `
      Основные функции: Регулирование давления наддува: Клапан не допускает превышения максимального давления наддува. Когда давление достигает заданного уровня, клапан открывается, позволяя части выхлопных газов обойти турбину турбокомпрессора.
Защита турбокомпрессора: Регулируя поток выхлопных газов, клапан защищает турбокомпрессор от превышения скорости вращения, что может привести к его поломке.
Контроль мощности и эффективности: Путём регулирования давления наддува, клапан помогает поддерживать оптимальные рабочие характеристики двигателя.
Снижение выбросов: В некоторых стратегиях управления двигателем пропускной клапан используется для управления температурой выхлопных газов и снижения выбросов. 
Принцип работы. Датчики и управление: Электронный блок управления двигателем (ADEM) получает информацию от датчиков давления и других систем.
Воздействие на клапан: Когда давление наддува достигает заданного уровня, ADEM отправляет сигнал на исполнительный механизм клапана.
Перенаправление выхлопных газов: Механизм открывает клапан, который перенаправляет избыточное количество выхлопных газов, минуя турбину.
Снижение давления: В результате такого перенаправления снижается скорость вращения турбины, что приводит к снижению давления наддува.
Регулировка: Система постоянно регулирует степень открытия клапана, чтобы поддерживать давление наддува на оптимальном уровне в зависимости от нагрузки двигателя. / 
Main functions. Boost pressure control: The valve prevents the boost pressure from exceeding the maximum limit. When the pressure reaches the set level, the valve opens, allowing part of the exhaust gases to bypass the turbocharger turbine.
Turbocharger protection: By regulating the exhaust gas flow, the valve protects the turbocharger from overspeeding, which could lead to mechanical failure.
Power and efficiency control: By adjusting the boost pressure, the valve helps maintain optimal engine performance.
Emission reduction: In some engine management strategies, the wastegate valve is also used to control exhaust gas temperature and reduce emissions.
Operating principle. Sensors and control: The engine electronic control module (ADEM) receives information from pressure and other sensors.
Valve actuation: When the boost pressure reaches the preset level, ADEM sends a signal to the valve actuator.
Exhaust gas bypass: The actuator opens the valve, redirecting excess exhaust gases to bypass the turbine.
Pressure reduction: As a result, the turbine speed decreases, which lowers the boost pressure.
Regulation: The system continuously adjusts the degree of valve opening to maintain the boost pressure at the optimal level depending on engine load.
    `,
    // 🟢 asosiy rasm
    image: "/images/blog/test2.jpg",
    // 🆕 qo‘shimcha rasmlar
    images: [
      "/images/blog/test2.jpg",
      "/images/blog/test2.1.jpg",
    ],
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "2025",
  },

  {
    id: 3,
    title:
      "Клапан минимального давления масла КСВ Comp Air LB-150 / Comp Air LB-150 Air compressor minimum oil pressure valve",
    paragraph: `
      Клапан минимального давления (КМД) для воздушного компрессора CompAir LB-150 играет ключевую роль в поддержании оптимальной работы системы. Он предотвращает обратный поток воздуха в маслобак, обеспечивая необходимое давление для смазки компрессора и защиты от износа. / The minimum pressure valve (MPV) for the CompAir LB-150 air compressor plays a key role in maintaining optimal system performance. It prevents air from flowing back into the oil tank, ensuring the necessary pressure for compressor lubrication and wear protection.
    `,
    details: `
      Устройство и принцип работы КМД
Клапан минимального давления — это комбинированный клапан, который обычно устанавливается на выходе из маслосепаратора (маслобака). Он выполняет две ключевые функции:
Поддержание рабочего давления. Во время запуска КМД закрыт, что позволяет быстро поднять давление в системе до необходимого уровня (обычно 3,5–4,5 бар). Это давление нужно для правильной циркуляции масла, необходимого для смазки и охлаждения винтового блока.
Обратный клапан. КМД также предотвращает обратный поток сжатого воздуха из пневмосети обратно в компрессор после его выключения. Это важно для правильного последующего запуска и защиты винтового блока. 
Компоненты КМД
Типичный КМД состоит из нескольких основных частей: 
Корпус: Обычно выполнен из алюминиевого сплава.
Поршень (золотник): Подвижный элемент, который открывает и закрывает проход для воздуха.
Пружина: Поддерживает поршень в закрытом положении до тех пор, пока давление не преодолеет ее сопротивление.
Уплотнения: Обеспечивают герметичность системы.
Обратный клапан (шариковый или тарельчатый): Встроен в конструкцию для предотвращения обратного потока воздуха. / 
Design and operating principle of the Minimum Pressure Valve (MPV)
The minimum pressure valve is a combined valve typically installed at the outlet of the oil separator (oil tank). It performs two key functions:
Maintaining operating pressure: During startup, the MPV remains closed, allowing system pressure to quickly rise to the required level (usually 3.5–4.5 bar). This pressure is necessary for proper oil circulation, which provides lubrication and cooling of the screw element.
Check valve function: The MPV also prevents compressed air from flowing back from the pneumatic system into the compressor after shutdown. This is essential for correct subsequent startup and for protecting the screw element.
Components of the MPV
A typical minimum pressure valve consists of several main components:
Body: Usually made of aluminum alloy.
Piston (spool): The moving element that opens and closes the air passage.
Spring: Keeps the piston in the closed position until the pressure overcomes its resistance.
Seals: Ensure system tightness and prevent leaks.
Check valve (ball or disc type): Built into the assembly to prevent reverse air flow.
    `,
    // 🟢 asosiy rasm
    image: "/images/blog/test3.jpg",
    // 🆕 qo‘shimcha rasmlar
    images: [
      "/images/blog/test3.jpg",
      "/images/blog/test3.1.jpg",
      "/images/blog/test3.2.jpg",
    ],
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 4,
    title:
      "Соленоидный клапан топливного газа ГПЭС Caterpillar G3516 / Fuel gas solenoid valve of Caterpillar G3516 gas piston power station",
    paragraph: `
      В системах пуска двигателя при включении электропитания запитка электромагнитного клапана отключения подачи газа обеспечивает подачу газа в двигатель. В системах остановки двигателя при включении электропитания запитка электромагнитного клапана отключения подачи газа обеспечивает отключение подачи газа в двигатель. / In engine start systems, when the power supply is turned on, the power supply to the electromagnetic valve that shuts off the gas supply ensures that gas is supplied to the engine. In engine stop systems, when the power supply is turned on, the power supply to the electromagnetic valve that shuts off the gas supply ensures that the gas supply to the engine is shut off.
    `,
    details: `
      Основные функции. Соленоидный клапан топливного газа на газогенераторе CAT G3516 является исполнительным устройством, которое управляется электронным блоком управления двигателем ADEM. Он выполняет следующие основные функции: 
Управление подачей топлива: Клапан открывает и закрывает подачу топливного газа в смеситель, контролируя количество топлива, поступающего в двигатель.
Защита двигателя: При возникновении неисправностей, например, при выходе параметров двигателя за пределы допустимых значений, ADEM может отключить клапан, чтобы немедленно прекратить подачу газа и остановить двигатель, предотвращая его повреждение.
Регулирование скорости и нагрузки: Система управления постоянно регулирует открытие клапана в зависимости от нагрузки на двигатель, обеспечивая оптимальное соотношение топливо-воздушной смеси. 
Принцип работы. Принцип работы соленоидного клапана топливного газа основан на электромагнетизме. 
Управляющий сигнал: Электронный блок ADEM посылает электрический сигнал на соленоид (электромагнитную катушку) клапана.
Магнитное поле: При подаче напряжения соленоид создает магнитное поле, которое притягивает плунжер.
Открытие/закрытие клапана: Перемещение плунжера приводит к открытию клапана, позволяя топливному газу поступать в двигатель. При прекращении подачи напряжения пружина возвращает плунжер в исходное положение, и клапан закрывается.
Точное дозирование: В зависимости от необходимой нагрузки, ADEM регулирует силу тока, подаваемого на клапан, управляя степенью его открытия. Это позволяет точно дозировать количество топлива, поступающего в смеситель. / 
Main functions. The fuel gas solenoid valve on the CAT G3516 gas generator is an actuator controlled by the ADEM electronic engine control module. It performs the following main functions:
Fuel supply control: The valve opens and closes the flow of fuel gas to the mixer, controlling the amount of fuel entering the engine.
Engine protection: In case of malfunctions, for example, when engine parameters exceed allowable limits, the ADEM system can shut off the valve to immediately stop the gas supply and shut down the engine, preventing damage.
Speed and load regulation: The control system continuously adjusts the valve opening depending on the engine load, ensuring the optimal air-fuel ratio.
Operating principle. The operating principle of the fuel gas solenoid valve is based on electromagnetism.
Control signal: The ADEM electronic module sends an electrical signal to the solenoid (electromagnetic coil) of the valve.
Magnetic field: When voltage is applied, the solenoid generates a magnetic field that attracts the plunger.
Valve opening/closing: The movement of the plunger opens the valve, allowing fuel gas to flow into the engine. When the voltage supply stops, a spring returns the plunger to its original position, closing the valve.
Precise metering: Depending on the required load, ADEM regulates the current supplied to the valve, controlling the degree of its opening. This allows precise metering of the amount of fuel entering the mixer.
    `,
    // 🟢 asosiy rasm
    image: "/images/blog/test4.jpg",
    // 🆕 qo‘shimcha rasmlar
    images: [
      "/images/blog/test4.jpg",
      "/images/blog/test4.1.jpg",
    ],
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 5,
    title:
      "Механический клапан ГРП / Mechanical valve Gas pressure regulator",
    paragraph: `
      Газорегуляторный пункт (ГРП) предназначен для понижения высокого или среднего давления газа до низкого, а также для поддержания его на заданном уровне. Основным элементом ГРП является механический клапан-регулятор давления. Его работа основана на противодействии двух сил — силы сжатия пружины и силы давления газа на мембрану. / A gas pressure regulator station (GPR) is designed to reduce high or medium gas pressure to low pressure and maintain it at a specified level. The main element of a GPR is a mechanical pressure regulating valve. Its operation is based on the counteraction of two forces: the compression force of the spring and the pressure force of the gas on the diaphragm. 
    `,
    details: `
      Основные функции. Снижение давления: Регулятор понижает высокое входное давление газа до необходимого, безопасного для потребителя выходного давления.
Стабилизация давления: Поддерживает выходное давление газа постоянным, независимо от колебаний входного давления и изменения расхода газа потребителем.
Безопасность: Многие механические регуляторы оснащены дополнительными устройствами, такими как предохранительный запорный клапан (ПЗК) и предохранительный сбросной клапан (ПСК), которые автоматически отключают подачу газа или сбрасывают избыточное давление в аварийных ситуациях. 
Принцип работы. Датчик (мембрана): Регулятор имеет чувствительную мембрану, которая разделяет две камеры. С одной стороны на мембрану давит регулируемый газ (выходное давление), а с другой — пружина.
Действие пружины: Сила пружины давит на мембрану, стремясь открыть клапан.
Действие газа: Выходное давление газа через импульсную трубку подается в подмембранную камеру, стремясь закрыть клапан.
Баланс сил: В нормальном режиме работы силы пружины и давления газа сбалансированы, и клапан остается в определенном положении, поддерживая постоянное выходное давление.
Изменение расхода: При увеличении расхода: Если потребитель начинает потреблять больше газа, давление в выходном трубопроводе падает. Сила давления газа на мембрану ослабевает, и пружина толкает мембрану и клапан, открывая его шире. Это увеличивает подачу газа, восстанавливая давление.
При уменьшении расхода: При снижении потребления газа давление в выходном трубопроводе возрастает. Сила давления газа на мембрану увеличивается, преодолевая усилие пружины. Мембрана приподнимает клапан, который частично или полностью перекрывает подачу газа, снижая давление до заданного уровня. / 
Main functions. Pressure reduction: The regulator reduces high inlet gas pressure to the required, safe outlet pressure for the consumer.
Pressure stabilization: It maintains constant outlet pressure regardless of fluctuations in inlet pressure or changes in gas consumption by the user.
Safety: Many mechanical regulators are equipped with additional safety devices, such as a shut-off valve (SSV) and a relief valve (SRV), which automatically cut off the gas supply or release excess pressure in emergency situations.
Operating principle. Sensor (diaphragm): The regulator has a sensitive diaphragm that separates two chambers. On one side, the regulated gas (outlet pressure) acts on the diaphragm, while on the other side there is a spring.
Spring action: The spring force pushes on the diaphragm, tending to open the valve.
Gas action: The outlet gas pressure, through an impulse tube, acts on the underside of the diaphragm, tending to close the valve.
Force balance: In normal operation, the spring force and the gas pressure are balanced, and the valve remains in a stable position, maintaining constant outlet pressure.
Flow variation: When flow increases: If the consumer starts using more gas, the pressure in the outlet pipeline drops. The gas pressure acting on the diaphragm weakens, and the spring pushes the diaphragm and valve open wider. This increases the gas supply, restoring the pressure.
When flow decreases: If gas consumption decreases, the pressure in the outlet pipeline rises. The gas pressure acting on the diaphragm increases, overcoming the spring force. The diaphragm lifts the valve, partially or fully restricting the gas flow, thereby reducing the pressure to the set level.
    `,
    // 🟢 asosiy rasm
    image: "/images/blog/test5.jpg",
    // 🆕 qo‘shimcha rasmlar
    images: [
      "/images/blog/test5.jpg",
      "/images/blog/test5.1.jpg",
    ],
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 6,
    title:
      "Привод клапана воздушного адсорбера КСВ  Comp Air LB-150 / Comp Air LB-150 Air compressor Adsorber Valve Drive",
    paragraph: `
      Назначение:
Предназначен для автоматического поворота запорно-регулирующей арматуры (шаровые краны, дисковые затворы) на определённый угол (обычно 90°) с помощью сжатого воздуха.
Принцип работы:
При подаче сжатого воздуха в пневмопривод поршни внутри корпуса перемещаются, создавая крутящий момент, который поворачивает выходной вал. Механизм может быть одинарного или двойного действия:
Одинарного действия — с пружинным возвратом
Двойного действия — для поворота в обе стороны сжатым воздухом / 
Purpose: Designed for automatic rotation of shut-off and control valves (ball valves, butterfly valves) to a specific angle (usually 90°) using compressed air.
Principle of operation: When compressed air is supplied to the pneumatic actuator, the pistons inside the housing move, creating a torque that rotates the output shaft. The mechanism can be single-acting or double-acting:
Single-acting — with spring return
Double-acting — for rotation in both directions using compressed air 
    `,
    details: `
      Принцип работы. Этот тип привода преобразует энергию сжатого воздуха во вращательное движение вала. Он работает по принципу «двойного действия»:
Поворот в одну сторону (например, открытие): Сжатый воздух подается через один из портов в цилиндрические полости корпуса. Давление воздуха воздействует на поршни с зубчатыми рейками, заставляя их двигаться к центру.
Вращение: Движение зубчатых реек вращает шестерню, которая находится между ними и соединена с выходным валом.
Поворот в другую сторону (например, закрытие): Для обратного поворота сжатый воздух подается через другой порт, заставляя поршни двигаться в противоположном направлении, что вращает шестерню и вал в обратную сторону.
Схема устройства. Основные компоненты поворотного пневмопривода:
Корпус: Обычно изготавливается из экструдированного алюминиевого сплава.
Поршни: Имеют зубчатые рейки, которые сцепляются с шестерней.
Выходной вал: Передает вращательное движение на арматуру.
Шестерня: Преобразует прямолинейное движение поршней во вращательное движение вала.
Порты для воздуха: Два отверстия для подачи и сброса сжатого воздуха.
Индикатор положения: Визуальный индикатор на верхней части привода показывает текущее положение вала (открыто или закрыто).
Такие приводы используются, когда необходимо дистанционно управлять арматурой, обеспечивая быстрый и надежный поворот вала на 90°. / 
Operating principle. This type of actuator converts the energy of compressed air into rotary motion of the shaft. It operates on the “double-acting” principle:
Rotation in one direction (for example, opening): Compressed air is supplied through one of the ports into the cylindrical chambers of the housing. The air pressure acts on the pistons with gear racks, causing them to move toward the center.
Rotation: The movement of the gear racks rotates the pinion gear located between them, which is connected to the output shaft.
Rotation in the opposite direction (for example, closing): For reverse rotation, compressed air is supplied through the other port, causing the pistons to move in the opposite direction, which rotates the pinion gear and shaft in the opposite way.
Design diagram. Main components of a rotary pneumatic actuator:
Housing: Usually made of extruded aluminum alloy.
Pistons: Equipped with gear racks that engage with the pinion gear.
Output shaft: Transfers rotary motion to the valve or other equipment.
Pinion gear: Converts the linear movement of the pistons into rotary motion of the shaft.
Air ports: Two openings for supplying and exhausting compressed air.
Position indicator: A visual indicator on the top of the actuator shows the current position of the shaft (open or closed).
Such actuators are used when remote valve control is required, providing fast and reliable 90° shaft rotation.



    `,
    // 🟢 asosiy rasm
    image: "/images/blog/test6.jpg",
    // 🆕 qo‘shimcha rasmlar
    images: [
      "/images/blog/test6.jpg",
      "/images/blog/test6.1.jpg",
      "/images/blog/test6.2.jpg",
    ],
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 7,
    title:
      "Турбонагнетатель ГПЭС Caterpillar G3516 /  Turbocharger of Caterpillar G3516 gas piston power station",
    paragraph: `
      Нагнетатель (турбокомпрессор) на газогенераторе Caterpillar G3516 выполняет критически важную функцию по увеличению мощности и эффективности двигателя. / The supercharger (turbocharger) on the Caterpillar G3516 gas generator performs a critical function in increasing engine power and efficiency.  
    `,
    details: `
      Основные функции. Его основные задачи: Сжатие воздуха: Нагнетатель сжимает воздух, подаваемый в цилиндры двигателя. Это позволяет подать большее количество воздуха в каждый цилиндр, что в свою очередь позволяет сжечь больше топлива.
Увеличение мощности: Сжигание большего количества топлива и воздуха в цилиндрах приводит к увеличению мощности двигателя при том же рабочем объеме.
Повышение эффективности: Нагнетатель позволяет сжечь топливо более эффективно, что приводит к снижению его удельного расхода.
Уменьшение выбросов: Некоторые модификации двигателя G3516, например с технологией Lean-burn, используют избыточное количество воздуха, что позволяет снизить температуру сгорания и, как следствие, уровень вредных выбросов.
Компенсация атмосферных условий: Турбокомпрессор помогает поддерживать производительность двигателя на высоте или в жарких условиях, где плотность воздуха ниже. 
Принцип работы. Принцип работы нагнетателя основан на использовании энергии выхлопных газов двигателя:
Движение турбины: Выхлопные газы из двигателя поступают в корпус турбины и вращают турбинное колесо.
Движение компрессора: Турбинное колесо и колесо компрессора находятся на одном валу, поэтому вращение турбины приводит в движение компрессор.
Всасывание и сжатие воздуха: Компрессор всасывает воздух из атмосферы, который затем сжимается и нагнетается в цилиндры двигателя.
Охлаждение: В некоторых модификациях двигателя G3516, особенно в тех, которые используют два турбокомпрессора, воздух после сжатия может проходить через систему промежуточного охлаждения (aftercooler) перед подачей в цилиндры. Это позволяет увеличить плотность воздуха и ещё больше повысить эффективность.
Регулирование: Для предотвращения избыточного давления наддува и превышения скорости вращения турбины используется пропускной клапан (wastegate), который перенаправляет часть выхлопных газов, минуя турбину. Управляется этот процесс электронным блоком двигателя (ADEM). / 
Main functions. Its main tasks: Air compression: The supercharger compresses the air supplied to the engine cylinders. This allows a greater amount of air to enter each cylinder, which in turn enables more fuel to be burned.
Power increase: Burning a larger quantity of fuel and air in the cylinders results in higher engine power output without increasing the engine’s displacement.
Efficiency improvement: The supercharger allows for more efficient fuel combustion, which leads to a reduction in specific fuel consumption.
Emission reduction: Some versions of the G3516 engine, such as those using lean-burn technology, utilize an excess amount of air. This lowers the combustion temperature and consequently reduces harmful emissions.
Compensation for atmospheric conditions: The turbocharger helps maintain engine performance at high altitudes or in hot environments where air density is lower.
Operating principle. The operating principle of the supercharger is based on utilizing the energy of the engine’s exhaust gases:
Turbine movement: Exhaust gases from the engine enter the turbine housing and rotate the turbine wheel.
Compressor movement: The turbine wheel and the compressor wheel are mounted on the same shaft, so the rotation of the turbine drives the compressor.
Air intake and compression: The compressor draws in atmospheric air, which is then compressed and delivered to the engine cylinders.
Cooling: In some versions of the G3516 engine, especially those equipped with two turbochargers, the compressed air passes through an aftercooling system before entering the cylinders. This increases air density and further improves efficiency.
Regulation: To prevent excessive boost pressure and turbine overspeed, a wastegate valve is used to divert part of the exhaust gases away from the turbine. This process is controlled by the engine’s electronic control module (ADEM).



    `,
    // 🟢 asosiy rasm
    image: "/images/blog/test7.jpg",
    // 🆕 qo‘shimcha rasmlar
    images: [
      "/images/blog/test7.jpg",
      "/images/blog/test7.1.jpg",
      "/images/blog/test7.2.jpg",
    ],
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 8,
    title:
      "ГБЦ ГПЭС Caterpillar G3516 Cylinder head block of Caterpillar G3516 gas piston power station",
    paragraph: `
      Головка блока цилиндров (ГБЦ) на газогенераторе Caterpillar G3516 является одним из важнейших компонентов двигателя, выполняющим несколько критически важных функций. ГБЦ закрывает цилиндры сверху, образуя герметичную камеру сгорания, и обеспечивает работу систем впуска, выпуска и зажигания. / The cylinder head (CH) on the Caterpillar G3516 gas generator is one of the most important components of the engine, performing several critical functions. The CH covers the cylinders from above, forming a sealed combustion chamber, and ensures the operation of the intake, exhaust, and ignition systems.  
    `,
    details: `
      Основные функции. Создание камеры сгорания: ГБЦ герметично закрывает верхнюю часть цилиндров, формируя камеру сгорания, где происходит сжатие и воспламенение топливо-воздушной смеси.
Газораспределение: Внутри ГБЦ расположены впускные и выпускные клапаны, которые управляют подачей свежей топливо-воздушной смеси и удалением отработанных выхлопных газов.
Охлаждение: Внутри ГБЦ проложены каналы для циркуляции охлаждающей жидкости. Они отводят избыточное тепло от камер сгорания, клапанов, свечей зажигания и инжекторов.
Размещение компонентов: В ГБЦ устанавливаются свечи зажигания, инжекторы (в некоторых модификациях), форсунки, датчики и другие элементы, необходимые для работы двигателя.
Смазка: Через ГБЦ проходит система смазки, которая подает масло к клапанному механизму и другим подвижным частям.
Принцип работы. Работа ГБЦ неразрывно связана с циклом работы двигателя.
Впуск: Впускной клапан открывается, и в цилиндр поступает топливо-воздушная смесь.
Сжатие: Клапаны закрываются, и поршень сжимает смесь.
Сгорание: По команде электронного блока управления (ADEM) происходит воспламенение смеси с помощью свечи зажигания.
Выпуск: Выпускной клапан открывается, и поршень выталкивает отработанные газы в выхлопной коллектор.
Для двигателя G3516, который работает на обедненной смеси, конструкция ГБЦ оптимизирована для снижения выбросов и повышения эффективности. Точная конструкция ГБЦ и расположение клапанов, каналов охлаждения и других элементов могут зависеть от конкретной версии двигателя (например, G3516A, G3516B, G3516C). / 
Main functions. Formation of the combustion chamber: The cylinder head tightly seals the top of the cylinders, forming the combustion chamber where the air-fuel mixture is compressed and ignited.
Gas distribution: Inside the cylinder head are intake and exhaust valves that control the supply of fresh air-fuel mixture and the removal of exhaust gases.
Cooling: Inside the cylinder head are channels for coolant circulation. They remove excess heat from the combustion chambers, valves, spark plugs, and injectors.
Component placement: The cylinder head houses spark plugs, injectors (in some modifications), fuel nozzles, sensors, and other elements necessary for engine operation.
Lubrication: The cylinder head contains part of the lubrication system that delivers oil to the valve mechanism and other moving components.
Operating principle. The operation of the cylinder head is inseparable from the engine’s working cycle.
Intake: The intake valve opens, allowing the air-fuel mixture to enter the cylinder.
Compression: The valves close, and the piston compresses the mixture.
Combustion: Under the command of the electronic control module (ADEM), the spark plug ignites the mixture.
Exhaust: The exhaust valve opens, and the piston pushes the exhaust gases into the exhaust manifold.
For the G3516 engine, which operates on a lean-burn mixture, the cylinder head design is optimized to reduce emissions and improve efficiency. The exact configuration of the cylinder head, including valve arrangement, cooling channels, and other elements, may vary depending on the specific engine version (e.g., G3516A, G3516B, G3516C).



    `,
    // 🟢 asosiy rasm
    image: "/images/blog/test8.jpg",
    // 🆕 qo‘shimcha rasmlar
    images: [
      "/images/blog/test8.jpg",
      "/images/blog/test8.1.jpg",
      "/images/blog/test8.2.jpg",
    ],
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 9,
    title:
      "Стартер ГПЭС JENBACHER GE 420 / Starter of JENBACHER GE 420 gas piston power station",
    paragraph: `
      Стартер на газовом двигателе Jenbacher GE 420 — это мощный электрический мотор, который обеспечивает начальный крутящий момент для запуска двигателя. Он необходим для того, чтобы раскрутить коленчатый вал до скорости, при которой происходит воспламенение топливовоздушной смеси и двигатель начинает работать самостоятельно. / The starter on the Jenbacher GE 420 gas engine is a powerful electric motor that provides the initial torque to start the engine. It is necessary to spin the crankshaft up to the speed at which the fuel-air mixture ignites and the engine starts running on its own.   
    `,
    details: `
      Основные функции. Запуск двигателя: Главная функция стартера — инициировать цикл работы двигателя, обеспечивая необходимое вращение коленчатого вала.
Преодоление сопротивления: Стартер должен обладать достаточной мощностью для преодоления сопротивления сжатию в цилиндрах, трения и других нагрузок, возникающих при запуске.
Быстрый и эффективный старт: Благодаря высокой производительности стартер позволяет быстро и эффективно запустить двигатель, сокращая время простоя. 
Принцип работы. Принцип работы стартера газогенератора Jenbacher GE 420 (JMS 420) аналогичен большинству современных стартеров.
Подача питания: Когда оператор инициирует запуск двигателя, электрический ток от аккумуляторной батареи подается на соленоид стартера.
Активация соленоида: Соленоид, который работает как электромагнит, выполняет две задачи:
Включение цепи: Он замыкает контакты, подавая основной ток с батареи на мощный электродвигатель стартера.
Выдвижение шестерни: Он выдвигает небольшую шестерню (бендикс) вперед, чтобы она зацепилась за зубчатый венец маховика двигателя.
Вращение маховика: Электродвигатель стартера начинает вращаться, передавая крутящий момент через бендикс на маховик двигателя. Это вращение приводит в движение коленчатый вал.
Воспламенение: Вращение коленчатого вала приводит к движению поршней, которые сжимают топливовоздушную смесь в цилиндрах. Система зажигания Jenbacher воспламеняет эту смесь, и двигатель начинает работать на собственной мощности.
Размыкание: Как только двигатель начинает работать самостоятельно, соленоид размыкает цепь питания стартера и отводит шестерню от маховика. Это предотвращает повреждение стартера от чрезмерно высокой скорости вращения. 
Компоненты стартера. Типичный стартер Jenbacher, например, производства Bosch, состоит из следующих основных компонентов: 
Электродвигатель: Создает крутящий момент для вращения.
Соленоид: Управляет включением питания и зацеплением с маховиком.
Шестерня (бендикс): Взаимодействует с маховиком.
Механизм привода: Выдвигает шестерню.
Для двигателя JMS 420, который является одной из самых современных установок в линейке Jenbacher, используется 24-вольтовый стартер с мощностью 8,4 кВт. / 
Main functions. Engine start: The main function of the starter is to initiate the engine’s operating cycle by providing the necessary rotation of the crankshaft.
Overcoming resistance: The starter must have sufficient power to overcome compression resistance in the cylinders, friction, and other loads occurring during startup.
Fast and efficient start: Due to its high performance, the starter allows the engine to start quickly and efficiently, minimizing downtime.
Operating principle. The operating principle of the Jenbacher GE 420 (JMS 420) gas generator starter is similar to that of most modern starters.
Power supply: When the operator initiates engine start, electric current from the battery is supplied to the starter solenoid.
Solenoid activation: The solenoid, which acts as an electromagnet, performs two functions:
Circuit engagement: It closes the contacts, supplying main current from the battery to the powerful electric motor of the starter.
Gear engagement: It pushes the small pinion gear (Bendix) forward so that it meshes with the flywheel ring gear of the engine.
Flywheel rotation: The starter motor begins to rotate, transmitting torque through the Bendix to the engine flywheel. This rotation drives the crankshaft.
Ignition: The rotation of the crankshaft causes the pistons to move, compressing the air-fuel mixture in the cylinders. The Jenbacher ignition system ignites this mixture, and the engine begins to run under its own power.
Disengagement: Once the engine starts running independently, the solenoid opens the starter power circuit and retracts the gear from the flywheel. This prevents the starter from being damaged by excessive rotational speed.
Starter components. A typical Jenbacher starter, such as one manufactured by Bosch, consists of the following main components:
Electric motor: Generates torque for rotation.
Solenoid: Controls power engagement and gear meshing with the flywheel.
Pinion gear (Bendix): Engages with the flywheel.
Drive mechanism: Moves the gear into position.
For the JMS 420 engine, which is one of the most advanced units in the Jenbacher lineup, a 24-volt starter with a power output of 8.4 kW is used.



    `,
    // 🟢 asosiy rasm
    image: "/images/blog/test9.jpg",
    // 🆕 qo‘shimcha rasmlar
    images: [
      "/images/blog/test9.jpg",
      "/images/blog/test9.1.jpg",
    ],
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 10,
    title:
      "ГБЦ ГПЭС JENBACHER GE 420 / Cylinder head block of JENBACHER GE 420 gas piston power station",
    paragraph: `
      Головка блока цилиндров (ГБЦ) газового двигателя Jenbacher GE 420 (JMS 420) — это сложный и критически важный компонент, оптимизированный для работы на газовом топливе. Её конструкция обеспечивает высокую эффективность сгорания, надёжность и долговечность. / The cylinder head (CH) of the Jenbacher GE 420 (JMS 420) gas engine is a complex and critical component optimized for gas fuel operation. Its design ensures high combustion efficiency, reliability, and durability.   
    `,
    details: `
      Основные функции. Герметизация камеры сгорания: ГБЦ закрывает цилиндр сверху, образуя герметичную камеру, где происходит сжатие и воспламенение топливо-воздушной смеси.
Газораспределение: Внутри ГБЦ расположены четыре клапана (два впускных и два выпускных) на каждый цилиндр. Эта конструкция обеспечивает оптимальный газообмен, улучшая наполнение цилиндров и очистку от выхлопных газов.
Управление потоком: Оптимизированная геометрия каналов в ГБЦ обеспечивает высокую эффективность, что приводит к лучшему сгоранию топлива.
Размещение компонентов: В ГБЦ устанавливаются свечи зажигания, а также клапаны и их приводы. Центральное расположение свечи обеспечивает оптимальные условия сгорания и охлаждения.
Охлаждение: Внутри ГБЦ проложены каналы для циркуляции охлаждающей жидкости, которая отводит тепло от клапанов, свечей и камеры сгорания, предотвращая перегрев.
Совместимость: Двигатель Jenbacher J420, созданный на основе проверенных технологий Type 3 и Type 6, имеет усовершенствованную конструкцию ГБЦ, которая является результатом многолетних разработок. 
Принцип работы. Впуск: Впускные клапаны открываются, и в цилиндр поступает гомогенная топливо-воздушная смесь.
Сжатие: Клапаны закрываются, и поршень сжимает смесь.
Сгорание: Система зажигания активируется, и свеча зажигания в центре камеры сгорания воспламеняет смесь. Оптимизированная геометрия ГБЦ способствует быстрому и эффективному сгоранию.
Выпуск: Выпускные клапаны открываются, и поршень выталкивает отработанные газы в выхлопной коллектор.
Тепловая нагрузка: ГБЦ специально разработана для минимизации тепловой нагрузки и повышения надёжности и долговечности компонентов. 
Схема. Точная схема ГБЦ, как и любого компонента двигателя, конфиденциальна и доступна только у производителя. Однако она включает:
Два впускных и два выпускных клапана на каждый цилиндр.
Центрально расположенную свечу зажигания.
Каналы для циркуляции охлаждающей жидкости.
Масляные каналы для смазки клапанного механизма. / 
Main functions. Sealing of the combustion chamber: The cylinder head closes the cylinder from above, forming a sealed chamber where the air-fuel mixture is compressed and ignited.
Gas distribution: Inside the cylinder head there are four valves (two intake and two exhaust) per cylinder. This design ensures optimal gas exchange, improving cylinder filling and exhaust gas scavenging.
Flow control: The optimized port geometry of the cylinder head provides high efficiency, resulting in better fuel combustion.
Component placement: The cylinder head accommodates spark plugs as well as the valves and their actuating mechanisms. The central position of the spark plug ensures optimal combustion and cooling conditions.
Cooling: Inside the cylinder head are channels for coolant circulation, which remove heat from the valves, spark plugs, and combustion chamber, preventing overheating.
Compatibility: The Jenbacher J420 engine, developed on the basis of proven Type 3 and Type 6 technologies, features an improved cylinder head design that is the result of many years of development.
Operating principle. Intake: The intake valves open, allowing a homogeneous air-fuel mixture to enter the cylinder.
Compression: The valves close, and the piston compresses the mixture.
Combustion: The ignition system activates, and the centrally located spark plug ignites the mixture in the combustion chamber. The optimized geometry of the cylinder head promotes fast and efficient combustion.
Exhaust: The exhaust valves open, and the piston pushes the exhaust gases into the exhaust manifold.
Thermal load: The cylinder head is specifically designed to minimize thermal stress and improve the reliability and durability of the components.
Diagram. The exact cylinder head diagram, like any other engine component, is confidential and available only from the manufacturer. However, it includes:
Two intake and two exhaust valves per cylinder.
A centrally located spark plug.
Coolant channels for circulation.
Oil channels for valve mechanism lubrication.



    `,
    // 🟢 asosiy rasm
    image: "/images/blog/test10.jpg",
    // 🆕 qo‘shimcha rasmlar
    images: [
      "/images/blog/test10.jpg",
      "/images/blog/test10.1.jpg",
      "/images/blog/test10.2.jpg",
    ],
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 11,
    title:
      "Турбонагнетатель ГПЭС JENBACHER GE 420  /  Turbocharger of JENBACHER GE 420  gas piston power station",
    paragraph: `
      Газовые двигатели Jenbacher, выпускаемые компанией INNIO, используют турбокомпрессоры (иногда называемые нагнетателями) для повышения мощности и эффективности. / Jenbacher gas engines manufactured by INNIO use turbochargers (sometimes called superchargers) to increase power and efficiency.   
    `,
    details: `
      Основные функции. Сжатие воздуха: Главная задача турбокомпрессора — сжать воздух, поступающий в цилиндры двигателя. Подача большего количества сжатого воздуха позволяет сжигать больше топлива и значительно повышает мощность двигателя.
Повышение эффективности: Сжатие воздуха и последующее его охлаждение (с помощью интеркулера) приводят к увеличению плотности воздуха. Это позволяет сжечь топливо более эффективно, что снижает удельный расход топлива.
Снижение выбросов: Современные двигатели Jenbacher работают на обеднённой топливовоздушной смеси (lean-burn). Это позволяет снизить температуру сгорания, что в свою очередь уменьшает образование вредных оксидов азота.
Компенсация условий эксплуатации: Турбокомпрессор помогает поддерживать производительность двигателя на высоте или в жарких условиях, где плотность воздуха ниже, компенсируя неблагоприятные атмосферные условия. 
Принцип работы. Принцип работы нагнетателя Jenbacher основан на использовании энергии выхлопных газов двигателя. 
Турбина: Выхлопные газы из двигателя поступают в корпус турбины и вращают турбинное колесо, преобразуя кинетическую энергию газов в механическую.
Компрессор: Турбинное колесо и колесо компрессора находятся на одном валу, поэтому вращение турбины приводит в движение компрессор.
Всасывание и сжатие воздуха: Компрессор всасывает воздух из атмосферы, который затем сжимается и нагнетается в цилиндры двигателя.
Охлаждение: В двигателях Jenbacher с интеркулером (охладителем наддувочного воздуха) воздух после сжатия проходит через систему охлаждения перед подачей в цилиндры. Охлаждение повышает плотность воздуха и увеличивает эффективность сгорания.
Электронное управление: Электронная система управления двигателем регулирует давление наддува в зависимости от нагрузки. Например, в двигателе J416 есть электронно-управляемый клапан, который регулирует мощность с помощью дроссельной заслонки. /
Main functions. Air compression: The main purpose of the turbocharger is to compress the air supplied to the engine cylinders. Delivering a greater amount of compressed air allows more fuel to be burned, significantly increasing engine power.
Efficiency improvement: Air compression and its subsequent cooling (using an intercooler) increase the air density. This allows for more efficient fuel combustion, reducing the specific fuel consumption.
Emission reduction: Modern Jenbacher engines operate on a lean-burn air-fuel mixture. This helps lower the combustion temperature, which in turn reduces the formation of harmful nitrogen oxides.
Compensation for operating conditions: The turbocharger helps maintain engine performance at high altitudes or in hot environments where air density is lower, compensating for unfavorable atmospheric conditions.
Operating principle. The operating principle of the Jenbacher turbocharger is based on utilizing the energy of the engine exhaust gases.
Turbine: Exhaust gases from the engine enter the turbine housing and rotate the turbine wheel, converting the kinetic energy of the gases into mechanical energy.
Compressor: The turbine wheel and the compressor wheel are mounted on a common shaft, so the rotation of the turbine drives the compressor.
Air intake and compression: The compressor draws in air from the atmosphere, which is then compressed and delivered to the engine cylinders.
Cooling: In Jenbacher engines equipped with an intercooler (charge air cooler), the compressed air passes through the cooling system before entering the cylinders. Cooling increases air density and improves combustion efficiency.
Electronic control: The electronic engine management system regulates the boost pressure depending on the load. For example, in the J416 engine, there is an electronically controlled valve that adjusts power through a throttle mechanism.



    `,
    // 🟢 asosiy rasm
    image: "/images/blog/test11.jpg",
    // 🆕 qo‘shimcha rasmlar
    images: [
      "/images/blog/test11.jpg",
      "/images/blog/test11.1.jpg",
      "/images/blog/test11.2.jpg",
      "/images/blog/test11.3.jpg",
      "/images/blog/test11.4.jpg",
    ],
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 12,
    title:
      "Запорная арматура ЗКЛ Ø100 / Shut-off valve ZKL Ø100",
    paragraph: `
      Задвижка клиновая литая (ЗКЛ) Ø100 — это тип запорной арматуры, которая используется для полного перекрытия потока рабочей среды в трубопроводах с условным проходом 100 мм. ЗКЛ наиболее широко применяется в промышленности и составляет значительную часть всей используемой арматуры.  / A cast wedge gate valve (ZK) Ø100 is a type of shut-off valve used to completely shut off the flow of working medium in pipelines with a nominal diameter of 100 mm. ZK valves are most widely used in industry and account for a significant proportion of all valves in use.    
    `,
    details: `
      Основные функции. Полное перекрытие потока: Главная и единственная функция запорной арматуры — обеспечивать герметичное перекрытие потока рабочей среды. Задвижка не предназначена для регулирования потока, так как длительная работа в промежуточных положениях может привести к быстрому износу и повреждению.
Изоляция участка трубопровода: ЗКЛ позволяет полностью изолировать часть трубопровода для проведения ремонтных работ, обслуживания или замены оборудования, не затрагивая остальную часть системы.
Управление потоками: Задвижка применяется в трубопроводах, где необходимо управлять направлением потока, например, при переключении между технологическими линиями.
Работа с различными средами: В зависимости от материала корпуса и уплотнений, ЗКЛ может работать с широким спектром рабочих сред, включая нефтегазовые смеси, воду, пар и агрессивные среды. 
Принцип работы. Конструкция: Задвижка состоит из корпуса, в котором размещен клиновидный затвор. Затвор перемещается перпендикулярно направлению потока.
Открытие: При вращении маховика или использовании привода шток поднимает клиновидный затвор, полностью открывая проход для рабочей среды.
Закрытие: При обратном вращении шток опускает затвор, который клином входит в седла корпуса и герметично перекрывает поток.
Герметизация: Клиновидная форма затвора обеспечивает надежное уплотнение, предотвращая утечку рабочей среды.
Типы привода: Ручной: Задвижка может управляться вручную с помощью маховика.
Электрический: Для удаленного управления и автоматизации процессов могут использоваться электрические приводы.
Другие: В зависимости от требований, могут применяться и другие типы приводов, например, пневматические. / 
Main functions. Complete shutoff of flow: The main and only function of shut-off valves is to ensure a tight shutoff of the working medium flow. A gate valve is not designed for flow regulation, as prolonged operation in intermediate positions may lead to rapid wear and damage.
Pipeline section isolation: The gate valve (ZKL) allows complete isolation of a section of the pipeline for repair, maintenance, or equipment replacement without affecting the rest of the system.
Flow control: A gate valve is used in pipelines where it is necessary to control the direction of flow, for example, when switching between process lines.
Operation with various media: Depending on the body and sealing materials, the gate valve (ZKL) can operate with a wide range of media, including oil and gas mixtures, water, steam, and aggressive environments.
Operating principle. Construction: The gate valve consists of a body containing a wedge-shaped gate that moves perpendicular to the flow direction.
Opening: When the handwheel is turned or an actuator is used, the stem lifts the wedge-shaped gate, fully opening the passage for the working medium.
Closing: When the handwheel is turned in the opposite direction, the stem lowers the gate, which wedges into the body seats, tightly shutting off the flow.
Sealing: The wedge-shaped design of the gate ensures reliable sealing, preventing any leakage of the working medium.
Types of actuators: Manual: The gate valve can be operated manually using a handwheel.
Electric: Electric actuators can be used for remote control and process automation.
Others: Depending on system requirements, other types of actuators such as pneumatic may also be applied.



    `,
    // 🟢 asosiy rasm
    image: "/images/blog/test12.jpg",
    // 🆕 qo‘shimcha rasmlar
    images: [
      "/images/blog/test12.jpg",
      "/images/blog/test12.1.jpg",
      "/images/blog/test12.2.jpg",
      "/images/blog/test12.3.jpg",
    ],
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 13,
    title:
      "Запорная арматура Запорный вентиль  Ø100 / Shut-off valve Shut-off valve  Ø100",
    paragraph: `
      Основные функции и принцип работы запорного вентиля диаметром 100 мм (ДУ100) схожи с другими типоразмерами вентилей и относятся к классу запорной арматуры. Главная задача такой арматуры — обеспечивать полное перекрытие потока рабочей среды в трубопроводе. / The main functions and operating principle of a 100 mm diameter shut-off valve (D100) are similar to other valve sizes and belong to the class of shut-off valves. The main task of such valves is to ensure complete shut-off of the working medium flow in the pipeline.    
    `,
    details: `
      Основные функции. Полное перекрытие потока: Главная функция вентиля — обеспечение герметичного перекрытия потока жидкости, газа, пара или другой среды. Это необходимо для проведения ремонтных работ, обслуживания или изоляции определённых участков трубопровода.
Герметичность затвора: Вентиль, в отличие от некоторых других видов арматуры, обеспечивает высокую герметичность в закрытом состоянии. Это достигается плотным прилеганием уплотнительной поверхности затвора (золотника) к седлу корпуса.
Изоляция участков системы: Вентили позволяют изолировать отдельные участки трубопроводной системы для технического обслуживания, ремонта или при возникновении аварийных ситуаций, предотвращая утечку рабочей среды. 
Принцип работы. Принцип работы запорного вентиля основан на возвратно-поступательном перемещении запирающего элемента — золотника (или клапана) — вдоль оси потока рабочей среды. 
Конструкция: Основные компоненты вентиля включают:
Корпус: Часть, которая монтируется в трубопровод.
Золотник (тарелка): Запирающий элемент, который перемещается внутри корпуса.
Шток (шпиндель): Передаёт усилие от привода (штурвала) к золотнику.
Седло: Уплотнительная поверхность на корпусе, куда прижимается золотник.
Маховик (штурвал): Используется для ручного управления вентилем.
Процесс открытия/закрытия: Закрытие: При вращении маховика по часовой стрелке, шток начинает поступательное движение вниз. Золотник, соединённый со штоком, опускается и плотно прижимается к седлу, полностью перекрывая проходное отверстие для рабочей среды.
Открытие: При вращении маховика против часовой стрелки, шток поднимает золотник, освобождая проход. Это позволяет рабочей среде беспрепятственно двигаться по трубопроводу.
Особенности движения: В отличие от задвижек, где запирающий элемент перемещается перпендикулярно потоку, в вентилях он движется параллельно ему.
При этом поток рабочей среды в корпусе вентиля дважды меняет своё направление (из-за чего гидравлическое сопротивление у вентилей выше, чем у задвижек), что, однако, обеспечивает более высокую герметичность и надёжность при работе с высоким давлением. 
Особенности запорного вентиля ДУ100. Тип соединения: Вентили с большим диаметром, как ДУ100, чаще всего имеют фланцевое соединение для обеспечения надёжного и герметичного монтажа в трубопроводе.
Область применения: Используются в промышленных трубопроводах, системах ЖКХ, на объектах тепло- и водоснабжения, где требуется надёжное и герметичное перекрытие потока на трубах диаметром 100 мм.
Материалы: В зависимости от рабочей среды и давления, корпус и внутренние части могут быть изготовлены из чугуна, стали, нержавеющей стали, бронзы и других материалов. / 
Main functions. Complete shutoff of flow: The main function of a valve is to provide a tight shutoff of liquid, gas, steam, or other medium flow. This is necessary for performing maintenance, repair, or isolating specific sections of the pipeline.
Tight sealing: Unlike some other types of fittings, the valve provides high tightness in the closed position. This is achieved by the tight contact of the sealing surface of the disk (plug) with the seat of the body.
System section isolation: Valves allow the isolation of individual sections of the pipeline system for maintenance, repair, or in case of emergency situations, preventing leakage of the working medium.
Operating principle. The operating principle of a shut-off valve is based on the reciprocating movement of the closing element — the disk (or plug) — along the axis of the working medium flow.
Construction: The main components of the valve include:
Body: The part that is mounted into the pipeline.
Disk (plug): The closing element that moves inside the body.
Stem (spindle): Transmits force from the actuator (handwheel) to the disk.
Seat: The sealing surface on the body against which the disk is pressed.
Handwheel: Used for manual operation of the valve.
Opening/closing process: Closing: When the handwheel is turned clockwise, the stem moves downward. The disk connected to the stem lowers and presses tightly against the seat, completely blocking the passage of the working medium.
Opening: When the handwheel is turned counterclockwise, the stem lifts the disk, opening the passage and allowing the working medium to flow freely through the pipeline.
Movement characteristics: Unlike gate valves, where the closing element moves perpendicular to the flow, in valves it moves parallel to it.
As a result, the working medium flow inside the valve body changes direction twice (which causes higher hydraulic resistance compared to gate valves), but this provides greater tightness and reliability when operating under high pressure.
Features of the shut-off valve DN100. Connection type: Large-diameter valves such as DN100 most often have a flanged connection to ensure reliable and tight installation in the pipeline.
Application area: Used in industrial pipelines, public utility systems, and heat and water supply facilities, where reliable and tight shutoff of flow in 100 mm diameter pipes is required.
Materials: Depending on the working medium and pressure, the body and internal parts may be made of cast iron, steel, stainless steel, bronze, and other materials.
    `,
    // 🟢 asosiy rasm
    image: "/images/blog/test13.jpg",
    // 🆕 qo‘shimcha rasmlar
    images: [
      "/images/blog/test13.jpg",
      "/images/blog/test13.1.jpg",
    ],
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 14,
    title:
      "Запорная арматура Шаровая задвижка Ø50 / Shut-off valves  Ball valve Ø50",
    paragraph: `
      Шаровой кран DN50 (Ø50) является одним из самых распространённых типов запорной арматуры, предназначенной для полного перекрытия потока рабочей среды в трубопроводах с условным проходом 50 мм. / The DN50 (Ø50) ball valve is one of the most common types of shut-off valves designed to completely shut off the flow of working media in pipelines with a nominal diameter of 50 mm.    
    `,
    details: `
      Основные функции. Полное перекрытие потока: Главная задача шарового крана — герметично перекрывать поток жидкости или газа. Кран не предназначен для регулирования потока, так как длительная работа в промежуточных положениях может привести к быстрому износу уплотнений и шара.
Быстрое срабатывание: Для управления шаровым краном достаточно повернуть рукоятку на 90 градусов. Это обеспечивает быстрое открытие или закрытие, что особенно важно в аварийных ситуациях.
Изоляция участка трубопровода: Как и любая запорная арматура, шаровой кран позволяет изолировать часть трубопровода для проведения ремонтных работ, обслуживания или замены оборудования.
Универсальность: Шаровые краны могут работать с широким спектром рабочих сред, включая воду, пар, нефтепродукты, газ и агрессивные среды, в зависимости от материала корпуса и уплотнений.
Долговечность и надёжность: Благодаря простой конструкции и высококачественным материалам, шаровые краны обладают высокой надёжностью и долгим сроком службы. 
Принцип работы. Принцип работы шарового крана основан на повороте сферического затвора (шара), расположенного внутри корпуса.
Конструкция: Внутри корпуса крана находится шар с отверстием. Этот шар крепится на штоке, соединённом с рукояткой или приводом.
Открытие: В открытом положении отверстие в шаре совмещается с осью трубопровода, позволяя рабочей среде свободно проходить.
Закрытие: При повороте рукоятки на 90 градусов шар поворачивается, и его глухая часть перекрывает проход, полностью останавливая поток среды.
Уплотнение: Герметичность обеспечивается уплотнительными кольцами (сёдлами), расположенными между шаром и корпусом, которые плотно прижимаются к шару. 
Типы приводов. Ручной: Управление осуществляется с помощью рукоятки.
Электрический: Используется для удалённого управления и автоматизации процессов.
Пневматический/гидравлический: Применяется в системах, где требуется быстрое и мощное управление. / 
Main functions. Complete shutoff of flow: The main purpose of a ball valve is to provide a tight shutoff of liquid or gas flow. The valve is not designed for flow regulation, as prolonged operation in intermediate positions may lead to rapid wear of the seals and the ball.
Quick operation: To operate a ball valve, it is sufficient to turn the handle by 90 degrees. This ensures rapid opening or closing, which is especially important in emergency situations.
Pipeline section isolation: Like any shut-off valve, a ball valve allows isolation of a section of the pipeline for maintenance, servicing, or equipment replacement.
Versatility: Ball valves can operate with a wide range of working media, including water, steam, petroleum products, gas, and aggressive substances, depending on the body and seal materials.
Durability and reliability: Due to their simple design and high-quality materials, ball valves offer high reliability and a long service life.
Operating principle. The operating principle of a ball valve is based on the rotation of a spherical closure element (the ball) located inside the body.
Construction: Inside the valve body, there is a ball with a through hole. This ball is mounted on a stem connected to a handle or actuator.
Opening: In the open position, the hole in the ball aligns with the pipeline axis, allowing the working medium to flow freely.
Closing: When the handle is turned 90 degrees, the ball rotates, and its solid part blocks the passage, completely stopping the flow of the medium.
Sealing: Tightness is ensured by sealing rings (seats) located between the ball and the body, which are pressed tightly against the ball.
Types of actuators. Manual: Operated using a handle.
Electric: Used for remote control and process automation.
Pneumatic/hydraulic: Applied in systems where fast and powerful actuation is required.
    `,
    // 🟢 asosiy rasm
    image: "/images/blog/test14.jpg",
    // 🆕 qo‘shimcha rasmlar
    images: [
      "/images/blog/test14.jpg",
      "/images/blog/test14.1.jpg",
    ],
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 15,
    title:
      "Запорная арматура Шаровая задвижка Ø50 / Shut-off valves Ball valve Ø50",
    paragraph: `
      Шаровой кран DN50 (Ø50) является одним из самых распространённых типов запорной арматуры, предназначенной для полного перекрытия потока рабочей среды в трубопроводах с условным проходом 50 мм. / The DN50 (Ø50) ball valve is one of the most common types of shut-off valves designed to completely shut off the flow of working fluid in pipelines with a nominal diameter of 50 mm.     
    `,
    details: `
      Основные функции. Полное перекрытие потока: Главная задача шарового крана — герметично перекрывать поток жидкости или газа. Кран не предназначен для регулирования потока, так как длительная работа в промежуточных положениях может привести к быстрому износу уплотнений и шара.
Быстрое срабатывание: Для управления шаровым краном достаточно повернуть рукоятку на 90 градусов. Это обеспечивает быстрое открытие или закрытие, что особенно важно в аварийных ситуациях.
Изоляция участка трубопровода: Как и любая запорная арматура, шаровой кран позволяет изолировать часть трубопровода для проведения ремонтных работ, обслуживания или замены оборудования.
Универсальность: Шаровые краны могут работать с широким спектром рабочих сред, включая воду, пар, нефтепродукты, газ и агрессивные среды, в зависимости от материала корпуса и уплотнений.
Долговечность и надёжность: Благодаря простой конструкции и высококачественным материалам, шаровые краны обладают высокой надёжностью и долгим сроком службы. 
Принцип работы. Принцип работы шарового крана основан на повороте сферического затвора (шара), расположенного внутри корпуса.
Конструкция: Внутри корпуса крана находится шар с отверстием. Этот шар крепится на штоке, соединённом с рукояткой или приводом.
Открытие: В открытом положении отверстие в шаре совмещается с осью трубопровода, позволяя рабочей среде свободно проходить.
Закрытие: При повороте рукоятки на 90 градусов шар поворачивается, и его глухая часть перекрывает проход, полностью останавливая поток среды.
Уплотнение: Герметичность обеспечивается уплотнительными кольцами (сёдлами), расположенными между шаром и корпусом, которые плотно прижимаются к шару. 
Типы приводов. Ручной: Управление осуществляется с помощью рукоятки.
Электрический: Используется для удалённого управления и автоматизации процессов.
Пневматический/гидравлический: Применяется в системах, где требуется быстрое и мощное управление. / 
Main functions. Complete shutoff of flow: The main purpose of a ball valve is to provide a tight shutoff of liquid or gas flow. The valve is not designed for flow regulation, as prolonged operation in intermediate positions may lead to rapid wear of the seals and the ball.
Quick operation: To operate a ball valve, it is sufficient to turn the handle by 90 degrees. This ensures rapid opening or closing, which is especially important in emergency situations.
Pipeline section isolation: Like any shut-off valve, a ball valve allows isolation of a section of the pipeline for maintenance, repair, or equipment replacement.
Versatility: Ball valves can handle a wide range of working media, including water, steam, petroleum products, gas, and aggressive substances, depending on the body and seal materials.
Durability and reliability: Due to their simple design and high-quality materials, ball valves are highly reliable and have a long service life.
Operating principle. The operating principle of a ball valve is based on the rotation of a spherical closure element (the ball) located inside the body.
Construction: Inside the valve body, there is a ball with a through hole. This ball is mounted on a stem connected to a handle or actuator.
Opening: In the open position, the hole in the ball aligns with the pipeline axis, allowing the medium to flow freely.
Closing: When the handle is turned 90 degrees, the ball rotates, and its solid part blocks the passage, completely stopping the flow of the medium.
Sealing: Tightness is ensured by sealing rings (seats) located between the ball and the body, which are pressed tightly against the ball.
Types of actuators. Manual: Operated by a handle.
Electric: Used for remote control and process automation.
Pneumatic/hydraulic: Applied in systems requiring fast and powerful actuation.
    `,
    // 🟢 asosiy rasm
    image: "/images/blog/test15.jpg",
    // 🆕 qo‘shimcha rasmlar
    images: [
      "/images/blog/test15.jpg",
      "/images/blog/test15.1.jpg",
    ],
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 16,
    title:
      "Обгонная муфта гидростартера ГПА GE LM2500+ / GE  LM2500+ GCU hydro-starter overrunning clutch",
    paragraph: `
      Обгонная муфта гидростартера GE — это ключевой механический компонент в системе запуска газотурбинных установок GE, который обеспечивает передачу крутящего момента от гидростартера к ротору турбины во время запуска, а затем автоматически расцепляется. / The GE hydrostarter overrunning clutch is a key mechanical component in GE gas turbine start-up systems, transferring torque from the hydrostarter to the turbine rotor during start-up and then automatically disengaging.     
    `,
    details: `
      Основные функции. Передача крутящего момента: Во время запуска гидростартер через обгонную муфту передает вращение ротору турбины. Это необходимо для того, чтобы раскрутить ротор до скорости самоподдержания, при которой турбина может работать самостоятельно.
Автоматическое расцепление: Как только турбина достигает скорости самоподдержания, скорость ротора превышает скорость гидростартера. В этот момент обгонная муфта автоматически расцепляется, чтобы избежать повреждения пускового устройства.
Защита гидростартера: Муфта предотвращает передачу избыточного крутящего момента и высокой скорости вращения от турбины обратно на гидростартер. Это защищает дорогостоящее пусковое оборудование от повреждений.
Безопасный переход к рабочему режиму: Расцепление муфты обеспечивает плавный и безопасный переход от пускового режима к рабочему, исключая потери мощности. 
Принцип работы. Гидростартеры на турбинах GE часто используют обгонные муфты с центробежным приводом или аналогичные им механизмы, например, с обгонными роликами.
Зацепление при запуске: Когда оператор инициирует запуск, система управления подает гидравлическое масло под давлением к гидромотору.
Гидромотор начинает вращаться и передает крутящий момент на вал обгонной муфты.
Внутри муфты специальные элементы (ролики или сухари) заклиниваются между внутренним и внешним кольцами, жестко сцепляя вал гидростартера с валом турбины.
Расцепление при наборе скорости: Как только турбина достигает скорости самоподдержания и начинает работать на собственном топливе, её ротор начинает вращаться быстрее, чем гидростартер.
Центробежная сила, возникающая при высокой скорости вращения, отбрасывает ролики или сухари, освобождая их от зацепления.
Муфта расцепляется, позволяя валу турбины свободно вращаться, в то время как вал гидростартера остается неподвижным.
Защита от повреждений: В расцепленном состоянии муфта вращается свободно в одном направлении (в сторону вала турбины), не передавая крутящий момент обратно на гидростартер.
Это предотвращает перегрузку гидромотора и других компонентов пусковой системы. 
Примечание: Для конкретных моделей турбин GE могут использоваться различные типы обгонных муфт, в том числе синхронные (SSS), которые автоматически входят в зацепление и расцепляются без внешнего управления. / 
Main functions. Transmission of torque: During startup, the hydrostarter transmits rotation to the turbine rotor through an overrunning clutch. This is necessary to accelerate the rotor to the self-sustaining speed at which the turbine can operate independently.
Automatic disengagement: Once the turbine reaches self-sustaining speed, the rotor speed exceeds the hydrostarter speed. At this moment, the overrunning clutch automatically disengages to prevent damage to the starting device.
Hydrostarter protection: The clutch prevents excessive torque and high rotational speed from being transmitted back from the turbine to the hydrostarter. This protects the expensive starting equipment from damage.
Safe transition to operating mode: Disengagement of the clutch ensures a smooth and safe transition from the starting mode to the operating mode, eliminating power losses.
Operating principle. Hydrostarter systems used in GE turbines often employ overrunning clutches with centrifugal drives or similar mechanisms, such as roller-type overrunning clutches.
Engagement during startup: When the operator initiates startup, the control system supplies pressurized hydraulic oil to the hydraulic motor.
The hydraulic motor begins to rotate and transmits torque to the shaft of the overrunning clutch.
Inside the clutch, special elements (rollers or sprags) wedge between the inner and outer rings, rigidly coupling the hydrostarter shaft with the turbine shaft.
Disengagement during acceleration: Once the turbine reaches the self-sustaining speed and begins operating on its own fuel, its rotor starts to rotate faster than the hydrostarter.
The centrifugal force generated by the high rotational speed causes the rollers or sprags to move outward, releasing the engagement.
The clutch disengages, allowing the turbine shaft to rotate freely while the hydrostarter shaft remains stationary.
Protection against damage: In the disengaged state, the clutch rotates freely in one direction (toward the turbine shaft) without transmitting torque back to the hydrostarter.
This prevents overloading of the hydraulic motor and other components of the starting system.
Note: For specific GE turbine models, different types of overrunning clutches may be used, including synchronous (SSS) types, which automatically engage and disengage without external control.
    `,
    // 🟢 asosiy rasm
    image: "/images/blog/test16.jpg",
    // 🆕 qo‘shimcha rasmlar
    images: [
      "/images/blog/test16.jpg",
      "/images/blog/test16.1.jpg",
    ],
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 17,
    title:
      "Винтовой компрессор Atlas Copco GA110 / Atlas Copco GA110 rotary screw compressor",
    paragraph: `
      Винтовой компрессор Atlas Copco GA110 — это мощный стационарный агрегат, предназначенный для производства больших объёмов сжатого воздуха для промышленных нужд. / The Atlas Copco GA110 screw compressor is a powerful stationary unit designed to produce large volumes of compressed air for industrial applications.     
    `,
    details: `
      Основные функции: Сжатие воздуха: Главная задача — сжатие атмосферного воздуха до заданного давления с помощью вращающейся винтовой пары.
Подача сжатого воздуха: Обеспечение бесперебойной и стабильной подачи сжатого воздуха для различных производственных процессов и пневматического оборудования.
Энергоэффективность: В современных моделях (например, с частотно-регулируемым приводом VSD+) обеспечивается высокая энергоэффективность, что позволяет значительно снизить потребление электроэнергии.
Длительная бесперебойная работа: Компрессоры серии GA рассчитаны на продолжительную работу в тяжелых условиях эксплуатации.
Компактность: В компрессорах с вертикальным дизайном VSD+ используется компактная конструкция, что позволяет размещать их в ограниченном пространстве. 
Принцип работы. Принцип работы винтового компрессора основан на вращении двух винтовых роторов, которые сжимают воздух.
Всасывание: Атмосферный воздух поступает через впускной фильтр и всасывающий клапан в винтовой блок.
Сжатие: Внутри винтового блока два винтовых ротора (ведущий и ведомый) вращаются в противоположных направлениях. Воздух, захваченный между роторами и стенками корпуса, движется от входа к выходу. По мере движения витки роторов уменьшают объём пространства, сжимая воздух.
Смешивание с маслом: В процессе сжатия в винтовой блок впрыскивается масло. Оно выполняет несколько функций:
Охлаждение: Охлаждает воздух, отводя тепло, выделяющееся при сжатии.
Смазка: Смазывает движущиеся части, уменьшая трение и износ.
Уплотнение: Заполняет зазоры между роторами, обеспечивая герметичность.
Разделение масла: Смесь сжатого воздуха и масла поступает в маслоотделитель. Здесь масло отделяется от воздуха.
Охлаждение сжатого воздуха: Сжатый воздух проходит через охладитель, где он охлаждается до необходимой температуры. В некоторых моделях может быть встроенный осушитель, который удаляет влагу.
Подача потребителю: Очищенный и охлаждённый сжатый воздух подается в пневмосеть.
Циркуляция масла: Отделенное в сепараторе масло проходит через охладитель и фильтр, после чего снова впрыскивается в винтовой блок. / 
Main functions: Air compression: The main task is to compress atmospheric air to a specified pressure using a rotating screw pair.
Compressed air supply: Ensuring uninterrupted and stable compressed air supply for various production processes and pneumatic equipment.
Energy efficiency: Modern models (e.g., with VSD+ variable speed drive) offer high energy efficiency, which significantly reduces power consumption.
Long-term uninterrupted operation: GA series compressors are designed for continuous operation in harsh conditions.
Compactness: VSD+ vertical compressors feature a compact design that allows them to be installed in confined spaces. 
Principle of operation. The principle of operation of a screw compressor is based on the rotation of two screw rotors that compress air.
Intake: Atmospheric air enters the screw block through the intake filter and intake valve.
Compression: Inside the screw block, two screw rotors (drive and driven) rotate in opposite directions. The air trapped between the rotors and the walls of the housing moves from the inlet to the outlet. As they move, the rotor threads reduce the volume of space, compressing the air.
Mixing with oil: During the compression process, oil is injected into the screw block. It performs several functions:
Cooling: Cools the air by removing the heat generated during compression.
Lubrication: Lubricates moving parts, reducing friction and wear.
Sealing: Fills the gaps between the rotors, ensuring airtightness.
Oil separation: A mixture of compressed air and oil enters the oil separator. Here, the oil is separated from the air.
Compressed air cooling: Compressed air passes through a cooler, where it is cooled to the required temperature. Some models may have a built-in dryer that removes moisture.
Supply to the consumer: Purified and cooled compressed air is supplied to the pneumatic network.
Oil circulation: The oil separated in the separator passes through the cooler and filter, after which it is injected back into the screw block. 
    `,
    // 🟢 asosiy rasm
    image: "/images/blog/test17.jpg",
    // 🆕 qo‘shimcha rasmlar
    images: [
      "/images/blog/test17.jpg",
      "/images/blog/test17.1.jpg",
    ],
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "2025",
  },
];

export default blogData;
