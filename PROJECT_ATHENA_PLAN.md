# Project: `fets.in` AI Assistant Evolution – "Athena"

## 1. Core Concept:

*   **Primary Purpose:** To evolve from a basic FAQ bot into "Athena," an intelligent, proactive, and personalized academic success partner for students using `fets.in`. Athena will not only answer questions but also guide users, offer tailored advice, and help them navigate their educational journey seamlessly.
*   **Intended Audience:** Primarily students preparing for various exams and certifications offered or supported through `fets.in`. Secondarily, prospective students or users seeking information about the platform's services.
*   **Problems Solved/Value Provided:**
    *   Drastically reduce the need for manual support by resolving a high percentage of queries automatically.
    *   Enhance student engagement and preparedness through personalized study tips and proactive guidance.
    *   Simplify complex processes like exam scheduling and resource discovery.
    *   Provide a consistent, knowledgeable, and empathetic support experience, 24/7.
    *   Increase user satisfaction and loyalty to the `fets.in` platform.

## 2. Definition of "One of the Best" (Project Athena Goals):

Achieving "one of the best" status for Athena means meeting the following benchmarks and capabilities:

*   **Performance Benchmarks:**
    *   **Query Resolution:** Achieve **90% automated query resolution** for common and moderately complex student inquiries.
    *   **Response Time:** Average response time under 3 seconds for most interactions.
    *   **Accuracy:** >95% accuracy in information provided and actions taken.
*   **Unique Capabilities:**
    *   **Personalized Study Tips:** Dynamically generate and suggest study tips based on user's stated goals, progress (if trackable), and common challenges for specific exams.
    *   **Proactive Exam Scheduling Advice:** Monitor (with user consent) relevant factors (e.g., stated exam dates, typical preparation times) and offer timely advice on when to book exams, considering availability.
    *   **Personalized Study Plan Generation:** Offer foundational study plan templates that users can customize, or (as a stretch goal) generate more dynamic plans based on user input and learning pace.
    *   **Deep Knowledge Integration:** Understand the nuances of different exams (ACCA, CMA US, IELTS, etc.) and platform services.
*   **User Experience Standards:**
    *   **"Feels like talking to a knowledgeable human tutor":** Empathetic, natural, and contextually aware conversations.
    *   **Intuitive Interaction:** Easy to use, with clear communication and minimal user effort.
    *   **Trust and Reliability:** Users feel confident in the information and assistance provided.
*   **Competitive Differentiators:**
    *   A truly personalized and proactive assistant that goes beyond reactive Q&A.
    *   Seamless integration with `fets.in` platform functionalities.
    *   A learning system that continuously improves based on user interactions.

## 3. Current Status, Resources, and Constraints:

*   **Current AI State:** Basic FAQ bot for students.
*   **Team:**
    *   2 Backend Developers
    *   1 Frontend Developer
*   **Existing Technology Stack (Assistant):** Python, RASA.
*   **Target Timeline:** 6 months for significant demonstrable upgrade towards "Athena" capabilities.
*   **Known Constraints:**
    *   Small team size necessitates focused effort and prioritization.
    *   The 6-month timeline requires an agile approach with clear milestones.
    *   Leveraging the existing Python/RASA stack where possible is efficient, but we must be open to augmenting it if needed for advanced features.

## 4. Development Stages & Lifecycle (Project Athena Roadmap):

We will adopt an agile, iterative approach. The 6-month target will be broken down into sprints focusing on delivering incremental value.

```mermaid
graph TD
    A[Phase 0: Planning & Foundation (Weeks 1-2)] --> B(Phase 1: Core NLU & Knowledge Enhancement (Weeks 3-8));
    B --> C(Phase 2: Personalization & Proactivity - MVP1 (Weeks 9-16));
    C --> D(Phase 3: Advanced Features & Integration - MVP2 (Weeks 17-22));
    D --> E(Phase 4: Testing, Refinement & Launch Prep (Weeks 23-24));
    E --> F(Post-Launch: Continuous Improvement & Monitoring);

    subgraph "Phase 0: Planning & Foundation"
        A1[Detailed Requirements Gathering]
        A2[Finalize Tech Stack Choices (RASA core + enhancements)]
        A3[Setup Dev/Staging Environments]
        A4[Define Core Knowledge Base Structure]
    end

    subgraph "Phase 1: Core NLU & Knowledge Enhancement"
        B1[Upgrade RASA NLU (Intents, Entities for fets.in)]
        B2[Integrate Internal Data Sources (FAQs, site content)]
        B3[Develop Initial Knowledge Retrieval (Semantic Search PoC)]
        B4[Basic Contextual Memory (within RASA)]
    end

    subgraph "Phase 2: Personalization & Proactivity - MVP1"
        C1[Implement User Profile Basics (for personalization)]
        C2[Develop Personalized Study Tips Engine (Rule-based/Simple ML)]
        C3[PoC for Proactive Exam Scheduling Advice (Logic-based)]
        C4[Enhanced Dialogue Management for multi-turn conversations]
    end

    subgraph "Phase 3: Advanced Features & Integration - MVP2"
        D1[Personalized Study Plan Generation (Template-based or simple dynamic)]
        D2[Integrate with Platform APIs (e.g., slot availability if feasible)]
        D3[Refine "Human Tutor" Conversational Tone]
        D4[Implement Feedback Mechanisms]
    end

    subgraph "Phase 4: Testing, Refinement & Launch Prep"
        E1[Rigorous Internal Testing & UAT]
        E2[Performance Optimization (aim for 90% resolution on tested scenarios)]
        E3[Documentation & Handoff Materials]
        E4[Bias Review & Ethical Checks]
    end
```

**Key Milestones (within 6 months):**

*   **Month 2:** Enhanced NLU deployed; expanded knowledge base accessible by the bot; improved contextual handling.
*   **Month 4 (MVP1):** Basic personalized study tips available; initial proactive scheduling advice PoC; more natural multi-turn conversations.
*   **Month 5.5 (MVP2):** Foundational personalized study plan generation; key API integrations (if any) functional; user feedback mechanisms in place.
*   **Month 6:** System tested, refined, and ready for a phased rollout or beta launch, meeting core "Athena" goals.

## 5. My Role & Assistance Provided (As Roo, Your Architect):

I will guide your team through each phase of this project:

*   **Phase 0: Planning & Foundation:**
    *   Help refine detailed requirements and user stories.
    *   Advise on architectural decisions for augmenting RASA (e.g., external knowledge stores, vector databases for semantic search, microservices for specialized AI tasks).
    *   Assist in designing the knowledge base schema and data ingestion pipelines.
*   **Phase 1: Core NLU & Knowledge Enhancement:**
    *   Provide best practices for intent and entity design within RASA for `fets.in`'s specific domain.
    *   Guide the selection and implementation of semantic search solutions to work alongside RASA.
    *   Help design strategies for data extraction from `public/` and other internal sources.
*   **Phase 2: Personalization & Proactivity (MVP1):**
    *   Architect the user profile system for storing preferences and interaction history securely.
    *   Help design the logic for the personalized study tips engine and proactive scheduling advice.
    *   Advise on advanced dialogue management techniques within or alongside RASA.
*   **Phase 3: Advanced Features & Integration (MVP2):**
    *   Guide the design of the study plan generation module.
    *   Assist in defining API contracts for platform integration.
    *   Provide input on crafting a more empathetic and "human-like" conversational style.
*   **Phase 4: Testing, Refinement & Launch Prep:**
    *   Help develop comprehensive testing strategies, including metrics for the 90% resolution target.
    *   Advise on performance optimization techniques.
    *   Guide the ethical review and bias mitigation process.
*   **Ongoing:**
    *   Facilitate brainstorming sessions for complex challenges.
    *   Review technical designs and code approaches.
    *   Help define and track key performance indicators (KPIs) for Athena's success.
    *   Advise on strategies for continuous learning and model improvement post-launch.