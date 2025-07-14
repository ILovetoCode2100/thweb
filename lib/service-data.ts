import {
  AnxietyIcon,
  ConfidenceIcon,
  SmokingIcon,
  WeightIcon,
  SleepIcon,
  PhobiaIcon,
} from '@/components/service-icons';

export const serviceDetails = {
  'anxiety-stress-relief': {
    title: 'Anxiety & Stress Relief',
    icon: AnxietyIcon,
    description:
      'Find lasting relief from anxiety and stress through proven hypnotherapy techniques that address both the symptoms and root causes.',
    fullDescription: `
      Anxiety and stress can feel overwhelming, affecting every aspect of your life. Through clinical hypnotherapy, 
      I help you develop effective coping strategies and address the underlying causes of your anxiety. 
      
      My approach combines relaxation techniques, cognitive restructuring, and positive suggestion therapy 
      to help you regain control and find inner calm. Whether you're dealing with generalised anxiety, 
      panic attacks, or stress-related issues, hypnotherapy offers a natural, drug-free solution.
    `,
    benefits: [
      'Reduced anxiety symptoms and panic attacks',
      'Improved stress management skills',
      'Better sleep quality and relaxation',
      'Increased confidence in challenging situations',
      'Long-lasting coping strategies',
      'Enhanced emotional resilience',
    ],
    process: `
      Treatment typically begins with understanding your specific triggers and anxiety patterns. 
      Through guided hypnosis, we work to reprogram negative thought patterns and install positive, 
      calming responses. Most clients experience significant improvement within 4-6 sessions.
    `,
    faqs: [
      {
        question: 'How quickly will I see results for anxiety?',
        answer:
          'Many clients report feeling calmer after just one session. However, for lasting change, I typically recommend 4-6 sessions to fully address anxiety patterns and develop robust coping strategies.',
      },
      {
        question: 'Can hypnotherapy help with panic attacks?',
        answer:
          'Yes, hypnotherapy is highly effective for panic attacks. We work on both preventing panic attacks and providing you with tools to manage them if they occur.',
      },
      {
        question: 'Will I need to relive traumatic experiences?',
        answer:
          "No, modern hypnotherapy techniques don't require you to relive trauma. We focus on creating positive changes in the present and future.",
      },
    ],
    relatedServices: ['confidence-building', 'sleep-issues', 'ibs-digestive-issues'],
  },
  'confidence-building': {
    title: 'Confidence Building',
    icon: ConfidenceIcon,
    description:
      'Unlock your inner confidence and overcome self-doubt to achieve your personal and professional goals.',
    fullDescription: `
      True confidence comes from within. Through hypnotherapy, we work together to identify and overcome 
      the limiting beliefs that hold you back, replacing them with empowering thoughts and behaviours.
      
      Whether you struggle with public speaking, social situations, or general self-esteem issues, 
      my tailored approach helps you build authentic, lasting confidence that transforms how you 
      show up in the world.
    `,
    benefits: [
      'Overcome imposter syndrome',
      'Excel in public speaking and presentations',
      'Improve social confidence and relationships',
      'Enhanced self-esteem and self-worth',
      'Better performance in professional settings',
      'Reduced fear of judgement',
    ],
    process: `
      We begin by exploring the root causes of your confidence issues, then use hypnotherapy to 
      reprogram negative self-talk and install positive beliefs. Visualisation and future pacing 
      techniques help you practice success in a safe environment.
    `,
    faqs: [
      {
        question: 'Can hypnotherapy really make me more confident?',
        answer:
          'Absolutely. Hypnotherapy works by accessing your subconscious mind where self-beliefs are stored, allowing us to update limiting beliefs with empowering ones.',
      },
      {
        question: 'How long does confidence building take?',
        answer:
          'Most clients see significant improvements in 3-5 sessions, though this varies based on individual needs and goals.',
      },
      {
        question: 'Will the confidence last after treatment?',
        answer:
          'Yes, the changes we make during hypnotherapy are designed to be permanent. I also provide tools and techniques to maintain your confidence long-term.',
      },
    ],
    relatedServices: ['anxiety-stress-relief', 'weight-management', 'fears-phobias'],
  },
  'stop-smoking': {
    title: 'Stop Smoking',
    icon: SmokingIcon,
    description:
      'Break free from nicotine addiction with our proven stop smoking programme designed for permanent change.',
    fullDescription: `
      Ready to become a non-smoker? My stop smoking programme is designed to help you quit 
      permanently, without the struggle and cravings typically associated with giving up cigarettes.
      
      Using advanced hypnotherapy techniques, we address both the physical addiction and the 
      psychological habits associated with smoking, giving you the best chance of success.
    `,
    benefits: [
      'Become a non-smoker in just one session',
      'Eliminate cravings and withdrawal symptoms',
      'Save thousands of pounds annually',
      'Improve your health immediately',
      'Regain control over your life',
      'Feel proud of your achievement',
    ],
    process: `
      My intensive stop smoking session lasts approximately 2 hours. We address your smoking triggers, 
      break the psychological addiction, and install a strong non-smoker identity. This comprehensive 
      approach gives you the best chance of permanent success.
    `,
    faqs: [
      {
        question: 'Can I really quit in just one session?',
        answer:
          'Yes, most clients successfully quit after one intensive session. However, I offer a free follow-up session within 3 months if needed.',
      },
      {
        question: "What if I've tried to quit before and failed?",
        answer:
          'Previous attempts actually increase your chances of success. Hypnotherapy addresses the subconscious patterns that other methods miss.',
      },
      {
        question: 'Will I gain weight after quitting?',
        answer:
          "Weight gain isn't inevitable. We address this concern during the session and can include suggestions for maintaining a healthy weight.",
      },
    ],
    relatedServices: ['weight-management', 'habit-breaking', 'anxiety-stress-relief'],
  },
  'weight-management': {
    title: 'Weight Management',
    icon: WeightIcon,
    description:
      'Achieve sustainable weight management through mindset change and a healthy relationship with food.',
    fullDescription: `
      Sustainable weight management isn\'t about willpower or strict diets - it\'s about changing 
      your relationship with food at a subconscious level. My hypnotherapy approach helps you 
      naturally make healthier choices without feeling deprived.
      
      Whether you want to lose weight, maintain a healthy weight, or overcome emotional eating, 
      I provide the tools and support you need for lasting success.
    `,
    benefits: [
      'Natural portion control without dieting',
      'Reduced cravings for unhealthy foods',
      'Overcome emotional and comfort eating',
      'Increased motivation for healthy habits',
      'Improved body image and self-esteem',
      'Sustainable long-term results',
    ],
    process: `
      Treatment includes the Virtual Gastric Band programme, a revolutionary approach that helps 
      you feel satisfied with smaller portions. Combined with addressing emotional eating triggers 
      and building healthy habits, this creates lasting change.
    `,
    faqs: [
      {
        question: 'What is the Virtual Gastric Band?',
        answer:
          "It's a hypnotherapy technique that creates the sensation of having a gastric band fitted, helping you feel satisfied with smaller portions naturally.",
      },
      {
        question: 'Do I need to follow a specific diet?',
        answer:
          'No specific diet is required. Hypnotherapy helps you naturally make healthier choices and eat mindfully.',
      },
      {
        question: 'How much weight can I expect to lose?',
        answer:
          'Weight loss varies by individual, but clients typically lose 1-2 pounds per week when following the programme.',
      },
    ],
    relatedServices: ['confidence-building', 'anxiety-stress-relief', 'habit-breaking'],
  },
  'sleep-issues': {
    title: 'Sleep Issues',
    icon: SleepIcon,
    description:
      'Overcome insomnia and restore healthy sleep patterns for better rest and improved wellbeing.',
    fullDescription: `
      Quality sleep is essential for physical and mental health, yet millions struggle with insomnia 
      and sleep disturbances. Hypnotherapy offers a natural, effective solution by addressing the 
      root causes of sleep issues and retraining your mind for restful sleep.
      
      Whether you have trouble falling asleep, staying asleep, or wake up feeling unrefreshed, 
      I can help you establish healthy sleep patterns and enjoy restorative rest.
    `,
    benefits: [
      'Fall asleep easily and naturally',
      'Stay asleep throughout the night',
      'Wake up feeling refreshed and energised',
      'Reduced anxiety around bedtime',
      'Improved overall health and wellbeing',
      'Better daytime focus and productivity',
    ],
    process: `
      We begin by identifying factors disrupting your sleep, then use hypnotherapy to create 
      positive sleep associations and calm racing thoughts. Self-hypnosis techniques are taught 
      for ongoing sleep improvement.
    `,
    faqs: [
      {
        question: 'How quickly will my sleep improve?',
        answer:
          'Many clients experience better sleep after the first session. Full sleep pattern restoration typically occurs within 3-4 sessions.',
      },
      {
        question: 'Can hypnotherapy help with nightmares?',
        answer:
          'Yes, hypnotherapy can help reduce nightmares and night terrors by addressing underlying anxieties and creating peaceful sleep associations.',
      },
      {
        question: 'Will I become dependent on hypnotherapy for sleep?',
        answer:
          'No, the goal is to restore your natural ability to sleep well. I teach self-hypnosis techniques you can use independently.',
      },
    ],
    relatedServices: ['anxiety-stress-relief', 'pain-management', 'confidence-building'],
  },
  'fears-phobias': {
    title: 'Fears & Phobias',
    icon: PhobiaIcon,
    description:
      'Release limiting fears and phobias that hold you back from living life to the fullest.',
    fullDescription: `
      Phobias can significantly limit your life, preventing you from enjoying experiences that others 
      take for granted. The good news is that most phobias can be successfully treated with hypnotherapy, 
      often in just a few sessions.
      
      Using proven techniques, we work to disconnect the fear response from the trigger, allowing you 
      to feel calm and in control in situations that previously caused anxiety.
    `,
    benefits: [
      'Freedom from limiting fears',
      'Ability to face previous triggers calmly',
      'Increased confidence and independence',
      'Enjoy new experiences and opportunities',
      'Improved quality of life',
      'Lasting results',
    ],
    process: `
      Treatment typically involves regression to identify the root cause (if appropriate), 
      desensitisation techniques, and installing new, positive responses. Most phobias can 
      be resolved in 2-4 sessions.
    `,
    faqs: [
      {
        question: 'Can any phobia be treated with hypnotherapy?',
        answer:
          'Yes, hypnotherapy is effective for virtually all phobias, from common ones like flying or spiders to more unusual specific fears.',
      },
      {
        question: 'Will I need to face my fear during treatment?',
        answer:
          "No, hypnotherapy works at the subconscious level. You won't need to directly confront your fear until you feel ready and confident.",
      },
      {
        question: 'How permanent are the results?',
        answer:
          'Once a phobia is properly resolved through hypnotherapy, the results are typically permanent.',
      },
    ],
    relatedServices: ['anxiety-stress-relief', 'confidence-building', 'panic-attacks'],
  },
};

export type ServiceSlug = keyof typeof serviceDetails;
