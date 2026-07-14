# Mixture of Experts Explained

نموذج **Mixture of Experts (MoE)** يحتوي على عدة وحدات متخصصة تسمى Experts. يقوم Router باختيار مجموعة صغيرة منها لكل Token بدل تشغيل جميع الخبراء.

## Core Flow

1. يدخل الـToken إلى الطبقة.
2. يحسب Router درجات الخبراء.
3. يختار Top-K Experts.
4. تعالج الخبراء المختارة الـToken.
5. تُدمج المخرجات وتنتقل إلى الطبقة التالية.

## الفائدة

يمكن أن يملك النموذج عددًا إجماليًا ضخمًا من المعاملات، بينما ينشط جزءًا فقط في كل خطوة استدلال.

## التكلفة

- Routing complexity.
- Memory movement.
- Expert imbalance.
- صعوبة النشر والتوزيع.
- ضغط I/O عند تخزين الخبراء خارج الذاكرة.

## Enterprise Analogy

نفس الفكرة مفيدة في SKY365:

- مهام المالية تذهب إلى Finance Skills.
- المهام القانونية تذهب إلى Legal Tools وPolicy Corpus.
- عمليات ERP تذهب إلى خدمات Deterministic.
- لا يتم تحميل كل Skill أو Rule أو Document لكل طلب.
