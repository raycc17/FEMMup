import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

export default function FEMMUPAcademia() {
  const [view, setView] = useState("home");
  const [progress] = useState(35);
  const [activeApply, setActiveApply] = useState(false);

  const courses = [
    { title: "Ecommerce Estratégico", modules: 6 },
    { title: "Branding con Criterio", modules: 4 },
    { title: "Mentalidad Empresarial", modules: 5 },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 p-6">
      <header className="flex justify-between items-center mb-10">
        <div className="flex items-center">
  <img
    src="headerlogo.png"
    alt="headerlogo.png"
className="h-70 md:h-86 w-auto object-contain"
  />
</div>
        </div>
        <div className="space-x-3">
          <Button
            onClick={() => setView("home")}
            className="group bg-[#e9e1e1] hover:bg-gradient-to-br hover:from-[#e9e1e1] hover:to-[#d19898] rounded-full px-6 py-2 transition-all duration-300"
          >
            <span className="bg-gradient-to-br from-[#000000] to-[#d19898] bg-clip-text text-transparent font-medium transition-all duration-300 group-hover:from-[#000000] group-hover:to-[#d19898]">
              Inicio
            </span>
          </Button>
          <Button
            onClick={() => setView("courses")}
            className="group bg-[#e9e1e1] hover:bg-gradient-to-br hover:from-[#e9e1e1] hover:to-[#d19898] rounded-full px-6 py-2 transition-all duration-300"
          >
            <span className="bg-gradient-to-br from-[#000000] to-[#d19898] bg-clip-text text-transparent font-medium transition-all duration-300 group-hover:from-[#000000] group-hover:to-[#d19898]">
              Programa
            </span>
          </Button>
          <Button
            onClick={() => setView("dashboard")}
            className="group rounded-full px-8 py-2 bg-black hover:bg-[#e9e1e1] tracking-widest uppercase text-sm shadow-md hover:scale-105 transition-all duration-300"
          >
            <span className="bg-gradient-to-br from-[#e9e1e1] to-[#d19898] bg-clip-text text-transparent font-semibold transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-[#000000] group-hover:to-[#d19898] group-hover:bg-clip-text group-hover:text-transparent">
              Campus
            </span>
          </Button>
        </div>
      </header>

      {/* HOME VIEW */}
      {view === "home" && (
        <motion.div initial={false} animate={{ opacity: 1 }}>
          {/* HERO BANNER */}
          <section className="mb-20 rounded-3xl overflow-hidden shadow-2xl">
            <div className="bg-gradient-to-r from-[#b98a8a] via-[#8b5e5e] to-[#140c0f] px-14 py-28">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                {/* LEFT SIDE */}
                <div className="text-white">
                  <p className="uppercase tracking-[0.4em] text-sm mb-6 opacity-70 font-light">
                    EDUCACIÓN
                  </p>

                <div className="flex items-center">
  <img
    src="logobanner.png"
    alt="logobanner.png"
className="h-70 md:h-86 w-auto object-contain"
  />
</div>

                </div>

                {/* RIGHT SIDE */}
                <div className="text-white md:text-right">
                  <p className="uppercase text-lg md:text-2xl tracking-wide font-extralight leading-relaxed max-w-md ml-auto">
                    Porque la educación y negocios ya están al alcance de todos
                  </p>

                  <div className="mt-10">
                    <Button
                      size="lg"
                      onClick={() => {
                        setView("apply");
                      }}
                      className="group rounded-2xl px-8 py-2 text-base transition-all duration-300 bg-black hover:bg-[#e9e1e1] active:bg-[#e9e1e1]"
                    >
                      <span
                        className="font-semibold bg-gradient-to-br from-[#e9e1e1] to-[#d19898] bg-clip-text text-transparent transition-all duration-300 group-hover:from-[#000000] group-hover:to-[#d19898]"
                      >
                        Postular
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ABOUT SECTION */}
          <section className="max-w-5xl mx-auto text-center mb-20">
            <h2 className="text-4xl font-semibold mb-6">¿Qué es FEMM-UP?</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              FEMM-UP es una academia de formación empresarial femenina diseñada
              para desarrollar criterio, estrategia y autonomía económica real.
              No es solo información: es estructura, práctica y mentalidad aplicada.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="rounded-2xl shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    Formación Estratégica
                  </h3>
                  <p className="text-gray-600">
                    Programas diseñados para aplicar, no solo aprender teoría.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Autonomía Real</h3>
                  <p className="text-gray-600">
                    Construye negocios sostenibles con criterio propio.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    Comunidad Elevada
                  </h3>
                  <p className="text-gray-600">
                    Mujeres que crecen juntas con ética y visión empresarial.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        </motion.div>
      )}

      {/* COURSES VIEW */}
      {view === "courses" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h2 className="text-3xl font-semibold mb-6">Nuestros Programas</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <Card key={index} className="rounded-2xl shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {course.title}
                  </h3>
                  <p className="mb-4">{course.modules} módulos</p>
                  <Button className="w-full">Ver detalles</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      )}

      {/* APPLY VIEW */}
      {view === "apply" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
        >
          {/* Arrow Pattern Background */}
          <div className="absolute inset-0 grid grid-cols-8 gap-8 opacity-60 pointer-events-none text-4xl font-light select-none">
            {[...Array(80)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ y: 0 }}
                animate={{ y: i % 7 === 0 ? -200 : 0 }}
                transition={{
                  repeat: Infinity,
                  duration: 6 + (i % 5),
                  ease: "linear",
                }}
                className={i % 7 === 0 ? "text-[#e9e1e1]" : "text-[#f9f7f7]"}
              >
                ↑
              </motion.div>
            ))}
          </div>

          {/* Form Container */}
          <div className="relative z-10 w-full max-w-2xl p-10 rounded-3xl bg-gradient-to-br from-[#000000]/90 to-[#d19898]/90 backdrop-blur-md shadow-2xl">
            <h2 className="text-3xl text-white font-semibold mb-8 text-center">
              Formulario de Postulación
            </h2>

            <form className="space-y-5">
              {[
                "¿Cuál es tu nombre?",
                "¿Cuál es tu apellido?",
                "DNI",
                "Edad",
                "Ciudad",
                "Provincia",
                "Indícanos a qué te dedicas actualmente",
                "¿Cuentas con estudios, experiencia o conocimientos en algo?",
                "¿En qué?",
                "¿Hay quienes dependan de ti?",
                "¿Por qué quieres ingresar a FEMMup↑?",
              ].map((label, index) => (
                <div key={index} className="flex flex-col">
                  <label className="text-sm text-white mb-1">{label}</label>
                  <input
                    type="text"
                    className="rounded-xl px-4 py-2 bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#d19898]"
                  />
                </div>
              ))}

              <Button
                type="submit"
                className="w-full mt-6 py-4 bg-black rounded-2xl"
              >
                <span className="bg-gradient-to-br from-[#e9e1e1] to-[#d19898] bg-clip-text text-transparent font-semibold tracking-wide">
                  ENVIAR
                </span>
              </Button>
            </form>
          </div>
        </motion.div>
      )}

      {/* DASHBOARD VIEW */}
      {view === "dashboard" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h2 className="text-3xl font-semibold mb-6">Mi Campus</h2>
          <Card className="rounded-2xl shadow-lg mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">
                Progreso General
              </h3>
              <Progress value={progress} className="mb-2" />
              <p>{progress}% completado</p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="rounded-2xl shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Próximas Tareas
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Subir práctica de branding</li>
                  <li>Responder evaluación módulo 2</li>
                </ul>
                <Button className="mt-4 w-full">Subir Tarea</Button>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Certificación
                </h3>
                <p>
                  Completa todos los módulos para desbloquear tu certificado
                  oficial FEMM-UP.
                </p>
                <Button className="mt-4 w-full" variant="outline">
                  Ver Requisitos
                </Button>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      )}
    </div>
  );
}
