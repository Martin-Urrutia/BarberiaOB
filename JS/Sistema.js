class Sistema{
    constructor(){
        // PRECARGA BARBEROS
        this.barberos = [
            new Barbero("0","Lucas","Pereira",
                "Especialista en cortes clásicos y fades",
                "Con más de 10 años de experiencia, Lucas domina los cortes tradicionales y los estilos modernos con una precisión impecable. Su lema: “Un buen corte comienza con una buena conversación"
                ,"IMG/Barberos/barbero0.png"),
            new Barbero("1","Mateo","Silva",
                "Barbero urbano y estilista de barbas",
                "Apasionado por los detalles y las tendencias urbanas, Mateo es el indicado si buscás un look actual y bien definido. También es experto en perfilado de barbas y cuidados masculinos.",
                "IMG/Barberos/barbero1.png"),
            new Barbero("2","Franco","Cabrera",
                "Técnico en grooming masculino",
                "Franco combina técnicas de barbería con asesoramiento en imagen. Siempre atento a la estética del cliente, ofrece una experiencia completa: corte, barba y estilo.",
                "IMG/Barberos/barbero2.png"),
            new Barbero("3","Joaquín","Torres",
                "Maestro en cortes modernos y freestyle",
                "Creativo y detallista, Joaquín destaca por sus diseños personalizados y cortes con estilo. Si buscás algo único, él es tu barbero.",
                "IMG/Barberos/barbero3.png"),
            new Barbero("4","Diego","Ramírez",
                "Clásico con un toque moderno",
                "Diego respeta las raíces de la barbería tradicional, pero con una mirada fresca. Su especialidad son los cortes ejecutivos y los afeitados al ras.",
                "IMG/Barberos/barbero4.png"),
            new Barbero("5","Bruno","Álvarez",
                "Barbero joven con talento y actitud",
                "Aunque joven, Bruno ya se ha ganado la confianza de muchos clientes por su precisión, estilo y trato cercano. Siempre listo para renovar tu imagen.",
                "IMG/Barberos/barbero5.png")
        ]
        // PRECARGA SERVICIOS
        this.servicios = [
            new Servicio("0","Corte de pelo","600",
                "Servicio enfocado en estilizar y dar forma al cabello de hombres según sus preferencias y estilo. Puede incluir cortes clásicos, modernos o personalizados, adaptados al tipo de rostro, cabello y tendencias actuales. Ideal para mantener una imagen prolija y cuidada",
                "IMG/servicio0.png"),
            new Servicio("1","Rasurado Barba","350",
                "Servicio que consiste en afeitar completamente la barba utilizando técnicas tradicionales o modernas, con navaja o máquina, para lograr un acabado suave y limpio. Suele incluir preparación de la piel con toalla caliente y productos para evitar irritaciones, brindando una experiencia relajante y profesional",
                "IMG/servicio1.png"),
            new Servicio("2","Colorimetría","1200",
                "Técnica profesional que estudia y aplica la teoría del color para cambiar, corregir o realzar el tono del cabello. Incluye la selección de colores adecuados según el tipo de piel, el color natural del cabello y el resultado deseado. Es fundamental para lograr teñidos, mechas o reflejos armoniosos y personalizados",
                "IMG/servicio2.png"),
            new Servicio("3","Servicio de lavado","300",
                "Proceso de limpieza capilar que incluye el uso de shampoo y acondicionador adecuados al tipo de cabello del cliente. Suele ir acompañado de un masaje en el cuero cabelludo que estimula la circulación y brinda una sensación relajante. Es el paso inicial ideal antes de un corte, peinado o tratamiento",
                "IMG/servicio3.png"),
            new Servicio("4","Acondicionamiento del cabello","400",
                "Tratamiento que hidrata, suaviza y fortalece el cabello después del lavado. Ayuda a desenredar, reducir el frizz y aportar brillo, mejorando la manejabilidad y la salud capilar. Se adapta a las necesidades específicas del cabello, ya sea seco, dañado, teñido o normal",
                "IMG/servicio4.png"),
            new Servicio("5","Servicio premium para fortalecer el cabello","950",
                "Tratamiento capilar intensivo que nutre y repara la fibra capilar desde la raíz hasta las puntas. Utiliza productos de alta gama con ingredientes activos como queratina, colágeno o aceites naturales, que restauran la salud del cabello debilitado, previenen la caída y le devuelven fuerza, brillo y vitalidad. Ideal para quienes buscan resultados visibles y duraderos",
                "IMG/servicio5.png")
        ]
    }
}