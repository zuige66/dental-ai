'use client'; // 这一行非常重要，因为它表明这是一个客户端组件，可以处理交互和动画。

import { motion } from 'framer-motion';

// 定义三个功能卡片的数据
const features = [
  {
    title: "AI 驱动的精度",
    description: "我们的核心 AI 引擎处理医学图像，在诊断和治疗计划中提供无与伦比的精确度。",
    icon: "⛭", // 实际项目中可以替换为更专业的 SVG 图标
  },
  {
    title: "端到端工作流",
    description: "从初始扫描到最终治疗方案，我们涵盖了整个工作流程，实现无缝的牙科护理。",
    icon: "♾️",
  },
  {
    title: "可扩展的方案",
    description: "专为各种规模的诊所设计，我们的解决方案可随您的需求增长，且不牺牲性能。",
    icon: "⧉",
  },
];

// 定义 Framer Motion 的动画变体：从隐藏到可见
const cardVariants = {
  hidden: { opacity: 0, y: 50 }, // 初始状态：不可见，向下偏移 50px
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, // 动画持续时间
      ease: "easeOut" // 缓动函数
    } 
  },
};

export default function FeatureSection() {
  return (
    // 使用 Tailwind CSS 定义 section 的内边距和背景色
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        
        {/* 头部标题 (也使用动画) */}
        <motion.h2 
          className="text-4xl font-extrabold text-gray-900 text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }} // 进入视口时触发
          viewport={{ once: true }} // 只动画一次
          transition={{ duration: 0.6 }}
        >
          为现代牙科提供的尖端解决方案
        </motion.h2>

        {/* 三栏布局 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-lg border-t-4 border-blue-500 hover:shadow-2xl transition duration-500 transform hover:-translate-y-1"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              // 错开动画：每个卡片延迟 0.2 秒出现
              transition={{ ...cardVariants.visible.transition, delay: index * 0.2 }}
            >
              {/* 图标/Emoji */}
              <div className="text-5xl mb-4 text-blue-600">{feature.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 text-lg">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}