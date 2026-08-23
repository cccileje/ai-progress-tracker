/**
 * Structured lesson-plan data parsed from the AI-to-YouTube 8-Week Roadmap.
 *
 * Structure: lessonPlan.weeks[] → .days[] → .videos[] / .task / .checklist[]
 *
 * Each video, task, and checklist item has a unique `id` used for progress tracking.
 * Videos with a known YouTube video ID include `embedId` for inline playback.
 * Videos that are search-only include a YouTube search URL.
 */

const lessonPlan = {
  title: 'AI-to-YouTube: 8-Week Beginner Roadmap',
  weeks: [
    // ───────────────────── WEEK 1 ─────────────────────
    {
      number: 1,
      title: 'Find the Right Channel',
      goal: "Don't spend eight weeks learning to make videos for a niche you don't actually want.",
      days: [
        {
          number: 1,
          title: 'Finding the Niche — What Makes a Good YouTube Niche',
          learningGoal: 'Understand the difference between a broad topic and a focused channel.',
          estimatedTime: '30–40 min',
          videos: [
            {
              id: 'd1-v1',
              title: 'Think Media — "How to Find the Best Niche for YouTube!"',
              description: 'Passion. Proficency. Profit.',
              url: 'https://www.youtube.com/watch?v=shfadUnDcco',
              embedId: null,
              isRewatch: false,
            },
            {
              id: 'd1-v2',
              title: '​The NEW YouTube Strategy Dominating in 2026',
              description: 'Let\'s learn about niche-bending.',
              url: 'https://www.youtube.com/watch?v=fLDrB_wmbNE',
              embedId: null,
              isRewatch: false,
            },
          ],
          task: {
            id: 'd1-task',
            description:
              'Write down 4 possible channel ideas. For each, answer: "Who would watch this?" and "Why would they come back?"',
          },
          notes: null,
          checkpoint: null,
        },
        {
          number: 2,
          title: 'Niche Research — Study the Competition',
          learningGoal: 'Learn to study successful channels without copying them.',
          estimatedTime: '60 min',
          videos: [
            {
              id: 'd2-v1',
              title: '7 Easy Steps on How to Perform a Competitor Analysis',
              description: 'Learn how market competitor analysis works in general, so you can apply it to YouTube.',
              url: 'https://www.youtube.com/watch?v=xaIeoPtHnuY',
              embedId: null,
              isRewatch: false,
            },
            {
              id: 'd2-v2',
              title: 'I studied 100+ faceless channels to CRACK the Algorithm',
              description: 'Discover the secrets behind successful faceless YouTube channels.',
              url: 'https://www.youtube.com/watch?v=NjVc8WXtrKM',
              embedId: null,
              isRewatch: false,
            },
          ],
          task: {
            id: 'd2-task',
            description:
              'Study 5 channels in each of the four possible niches. Record: Subscriber count, Typical views, Video length, Titles, Thumbnail style, Topics that repeatedly perform well.',
          },
          notes: null,
          checkpoint: null,
        },
        {
          number: 3,
          title: 'Audience Research — What Would People Actually Watch?',
          learningGoal: 'Learn how to turn a topic into questions people want answered.',
          estimatedTime: '45–60 min',
          videos: [
            {
              id: 'd3-v1',
              title: 'Kevin Stratvert — "How to Use ChatGPT (2025)"',
              description: 'Now it\'s time to meet ChatGPT.',
              url: 'https://www.youtube.com/watch?v=PDw3Uk9dN9k',
              embedId: 'PDw3Uk9dN9k',
              isRewatch: false,
            },
            {
              id: 'd3-v2',
              title: 'Kevin Stratvert - How to Use Perplexity AI: The UNDERRATED Search AI"',
              description: 'Some AI tools are better at some things more than others. Perplexity is made for research.',
              url: 'https://www.youtube.com/watch?v=bOHfJZ4DVqE',
              embedId: null,
              isRewatch: false,
            },
          ],
          task: {
            id: 'd3-task',
            description:
              'Ask ChatGPT and Perplexity: "Give me 30 questions that Africans living abroad might have about current events, economics, culture, technology and politics in Africa. Separate questions that are factual from questions that require explanation."',
          },
          notes: null,
          checkpoint: null,
        },
        {
          number: 4,
          title: 'Compare the Four Niches',
          learningGoal: 'Make a rational choice instead of choosing based on a hunch.',
          estimatedTime: '30–50 min',
          videos: [
            {
              id: 'd4-v1',
              title: 'How to ACTUALLY Pick A Niche (for Creators who WANT to niche down)',
              description: 'Time to learn how tonarrow things down.',
              url: 'https://youtu.be/TLCuJRivmhU?si=g14UcrNn1FseElC4',
              embedId: null,
              isRewatch: false,
            },
          ],
          task: {
            id: 'd4-task',
            description:
              'Score each niche 1–5 for: Interest, Audience, Competition, Number of possible videos, Monetization, Ease of producing videos, Ability to add original insight.',
          },
          notes: null,
          checkpoint: null,
        },
        {
          number: 5,
          title: 'Make the Decision — Explain It Back',
          learningGoal: 'Choose a niche and explain why it makes sense.',
          estimatedTime: '20–30 min',
          videos: [
            {
              id: 'd5-v1',
              title: 'YouTube Creators — "How to Create a YouTube Channel & Customize It (Creator Basics)"',
              description: 'A short video from YouTube themselves about channel setup.',
              url: 'https://youtu.be/aKydtOXW8mI?si=c6Ku95YyfChjg-5R',
              embedId: null,
              isRewatch: false,
            },
          ],
          task: {
            id: 'd5-task',
            description:
              'Complete this sentence aloud: "My channel is for ________. I will help them understand ________. My videos will be different because ________."',
          },
          notes:
            'Recommended direction: "My channel is for Africans and people interested in Africa, especially people living outside Africa. I will explain important African news, events and trends in simple language and provide the background people need to understand them. My videos will focus on context and explanation rather than simply repeating headlines."',
          checkpoint: 'If you cannot explain the channel in 30 seconds, don\'t move on.',
        },
      ],
      checklist: [
        { id: 'w1-c1', description: 'Investigated four niches' },
        { id: 'w1-c2', description: 'Studied at least 20 competing channels' },
        { id: 'w1-c3', description: 'Identified target viewer' },
        { id: 'w1-c4', description: 'Chosen channel niche' },
        { id: 'w1-c5', description: 'Written one-sentence channel description' },
        { id: 'w1-c6', description: 'Created 10 possible video ideas' },
      ],
    },

    // ───────────────────── WEEK 2 ─────────────────────
    {
      number: 2,
      title: 'Learn AI Without Getting Overwhelmed',
      goal: 'Become comfortable talking to AI and checking its work.',
      days: [
        {
          number: 6,
          title: 'What AI Actually Is',
          learningGoal: 'Understand AI, generative AI, chatbots and hallucinations in plain English.',
          estimatedTime: '30–45 min',
          videos: [
            {
              id: 'd6-v1',
              title: 'Kevin Stratvert — "How to Use ChatGPT (2025)"',
              description: 'About 18 min.',
              url: 'https://www.youtube.com/watch?v=PDw3Uk9dN9k',
              embedId: 'PDw3Uk9dN9k',
              isRewatch: false,
            },
            {
              id: 'd6-v2',
              title: 'AI Explained for Beginners 2025 — Kevin Stratvert',
              description: 'Search for a current beginner-friendly AI explainer.',
              url: 'https://www.youtube.com/results?search_query=AI+explained+for+beginners+2025+Kevin+Stratvert',
              embedId: null,
              isRewatch: false,
            },
          ],
          task: {
            id: 'd6-task',
            description:
              'Ask ChatGPT to explain AI three ways: 1) To a 10-year-old, 2) To a 60-year-old, 3) In 5 bullet points.',
          },
          notes: null,
          checkpoint: null,
        },
        {
          number: 7,
          title: 'Prompting',
          learningGoal: 'Learn that a good prompt gives AI a job, context and clear instructions.',
          estimatedTime: '60–90 min',
          videos: [
            {
              id: 'd7-v1',
              title: 'Kevin Stratvert — "How to Use ChatGPT (2025)"',
              description: 'Focus on the prompting sections.',
              url: 'https://www.youtube.com/watch?v=PDw3Uk9dN9k',
              embedId: 'PDw3Uk9dN9k',
              isRewatch: true,
            },
            {
              id: 'd7-v2',
              title: 'ChatGPT Prompting for Beginners 2025',
              description: 'Search result — choose a relevant video.',
              url: 'https://www.youtube.com/results?search_query=ChatGPT+prompting+for+beginners+2025',
              embedId: null,
              isRewatch: false,
            },
          ],
          task: {
            id: 'd7-task',
            description:
              'Turn "Tell me about Nigeria\'s economy." into three better prompts.',
          },
          notes: null,
          checkpoint: null,
        },
        {
          number: 8,
          title: 'Research With AI',
          learningGoal: 'Use AI for research without blindly trusting it.',
          estimatedTime: '90 min',
          videos: [
            {
              id: 'd8-v1',
              title: 'Tutorials With Nathan — "How to Use Perplexity AI 2025"',
              description: 'About 15–20 min.',
              url: 'https://www.youtube.com/results?search_query=Tutorials+With+Nathan+How+to+Use+Perplexity+AI+2025',
              embedId: null,
              isRewatch: false,
            },
            {
              id: 'd8-v2',
              title: 'Kevin Stratvert — "Google Gemini: PRO Tutorial for Beginners (2025)"',
              description: 'About 25 min.',
              url: 'https://www.youtube.com/results?search_query=Kevin+Stratvert+Google+Gemini+PRO+Tutorial+for+Beginners+2025',
              embedId: null,
              isRewatch: false,
            },
          ],
          task: {
            id: 'd8-task',
            description:
              'Research one African news topic using Perplexity, Gemini, and ChatGPT. Compare the answers.',
          },
          notes: null,
          checkpoint: null,
        },
        {
          number: 9,
          title: 'Fact-Checking',
          learningGoal: 'Learn that AI is a research assistant, not the final authority.',
          estimatedTime: '90 min',
          videos: [
            {
              id: 'd9-v1',
              title: 'Kevin Stratvert — "Google Gemini: PRO Tutorial for Beginners (2025)"',
              description: 'Especially the fact-checking / sources sections.',
              url: 'https://www.youtube.com/results?search_query=Kevin+Stratvert+Google+Gemini+PRO+Tutorial+for+Beginners+2025',
              embedId: null,
              isRewatch: true,
            },
            {
              id: 'd9-v2',
              title: 'How to Fact-Check AI Answers (2025)',
              description: 'Search result — choose a relevant video.',
              url: 'https://www.youtube.com/results?search_query=how+to+fact+check+AI+answers+2025',
              embedId: null,
              isRewatch: false,
            },
          ],
          task: {
            id: 'd9-task',
            description: 'Find 5 claims made by AI and verify them using original sources.',
          },
          notes: null,
          checkpoint: null,
        },
        {
          number: 10,
          title: 'First Video Idea',
          learningGoal: 'Turn research into a real video concept.',
          estimatedTime: '90–120 min',
          videos: [
            {
              id: 'd10-v1',
              title: 'How to Come Up With YouTube Video Ideas 2025 — Think Media',
              description: 'Search result.',
              url: 'https://www.youtube.com/results?search_query=how+to+come+up+with+YouTube+video+ideas+2025+Think+Media',
              embedId: null,
              isRewatch: false,
            },
          ],
          task: {
            id: 'd10-task',
            description:
              'Produce 10 video ideas. Pick the best 3. Pick one to make first. Research it for 30 minutes.',
          },
          notes: null,
          checkpoint: 'Explain the story aloud without looking at notes.',
        },
      ],
      checklist: [
        { id: 'w2-c1', description: 'Understands basic AI terms' },
        { id: 'w2-c2', description: 'Can write a useful prompt' },
        { id: 'w2-c3', description: 'Can use ChatGPT' },
        { id: 'w2-c4', description: 'Can use Gemini' },
        { id: 'w2-c5', description: 'Can use Perplexity' },
        { id: 'w2-c6', description: 'Understands AI can be wrong' },
        { id: 'w2-c7', description: 'Can fact-check information' },
      ],
    },

    // ───────────────────── WEEK 3 ─────────────────────
    {
      number: 3,
      title: 'Scripts, Storytelling and AI Voice',
      goal: 'Produce the raw material for a faceless video.',
      days: [
        {
          number: 11,
          title: 'How a YouTube Script Works',
          learningGoal: 'Learn the basic structure of a good video.',
          estimatedTime: '75–90 min',
          videos: [
            {
              id: 'd11-v1',
              title: 'YouTube Script Writing for Beginners 2025',
              description: 'Prefer Think Media, Channel Makers, or Film Booth.',
              url: 'https://www.youtube.com/results?search_query=YouTube+script+writing+for+beginners+2025',
              embedId: null,
              isRewatch: false,
            },
          ],
          task: {
            id: 'd11-task',
            description:
              'Break a successful African YouTube video into: Hook, Problem/story, Background, Main points, Conclusion.',
          },
          notes: null,
          checkpoint: null,
        },
        {
          number: 12,
          title: 'Write the First Script With AI',
          learningGoal: 'Use AI to create a first draft rather than asking it to produce a finished video.',
          estimatedTime: '90–120 min',
          videos: [
            {
              id: 'd12-v1',
              title: 'Kevin Stratvert — "How to Use ChatGPT (2025)"',
              description: 'About 18 min.',
              url: 'https://www.youtube.com/watch?v=PDw3Uk9dN9k',
              embedId: 'PDw3Uk9dN9k',
              isRewatch: true,
            },
            {
              id: 'd12-v2',
              title: 'ChatGPT YouTube Script Tutorial 2025',
              description: 'Search result.',
              url: 'https://www.youtube.com/results?search_query=ChatGPT+YouTube+script+tutorial+2025',
              embedId: null,
              isRewatch: false,
            },
          ],
          task: {
            id: 'd12-task',
            description: 'Produce a 5–7 minute script. Then personally edit it.',
          },
          notes: null,
          checkpoint: null,
        },
        {
          number: 13,
          title: 'Make the Script Sound Human',
          learningGoal: 'Learn to remove the "AI-written" sound.',
          estimatedTime: '60–90 min',
          videos: [
            {
              id: 'd13-v1',
              title: 'How to Make AI Writing Sound Human — YouTube Script 2025',
              description: 'Search result.',
              url: 'https://www.youtube.com/results?search_query=how+to+make+AI+writing+sound+human+YouTube+script+2025',
              embedId: null,
              isRewatch: false,
            },
          ],
          task: {
            id: 'd13-task',
            description: 'Read the script aloud. Rewrite anything that sounds unnatural.',
          },
          notes: null,
          checkpoint: null,
        },
        {
          number: 14,
          title: 'AI Voiceover',
          learningGoal: 'Create a natural voiceover.',
          estimatedTime: '75–90 min',
          videos: [
            {
              id: 'd14-v1',
              title: 'Digibase Media — "ElevenLabs Tutorial for Beginners (2025)"',
              description: 'About 17 min. Create realistic AI voices step by step.',
              url: 'https://www.youtube.com/results?search_query=Digibase+Media+ElevenLabs+Tutorial+for+Beginners+2025',
              embedId: null,
              isRewatch: false,
            },
            {
              id: 'd14-v2',
              title: 'CapCut Text-to-Speech Tutorial 2025 (Backup)',
              description: 'Use as a backup option.',
              url: 'https://www.youtube.com/results?search_query=CapCut+text+to+speech+tutorial+2025',
              embedId: null,
              isRewatch: false,
            },
          ],
          task: {
            id: 'd14-task',
            description: 'Turn the first 60–90 seconds of the script into voiceover.',
          },
          notes: 'Do not use voice cloning. A normal licensed AI voice is simpler and safer.',
          checkpoint: null,
        },
        {
          number: 15,
          title: 'First Audio Package',
          learningGoal: 'Create the complete narration track for Video #1.',
          estimatedTime: '90–120 min',
          videos: [
            {
              id: 'd15-v1',
              title: 'Rewatch: ElevenLabs Text-to-Speech Section',
              description: 'About 10 min. Review the TTS workflow.',
              url: 'https://www.youtube.com/results?search_query=Digibase+Media+ElevenLabs+Tutorial+for+Beginners+2025',
              embedId: null,
              isRewatch: true,
            },
          ],
          task: {
            id: 'd15-task',
            description: 'Produce the entire voiceover for Video #1.',
          },
          notes: null,
          checkpoint: 'Listen without looking at the script. Mark anything that sounds wrong.',
        },
      ],
      checklist: [
        { id: 'w3-c1', description: 'Can outline a video' },
        { id: 'w3-c2', description: 'Can write/edit a script with AI' },
        { id: 'w3-c3', description: 'Can recognize bad AI writing' },
        { id: 'w3-c4', description: 'Can create AI voiceover' },
        { id: 'w3-c5', description: 'Finished first narration' },
      ],
    },

    // ───────────────────── WEEK 4 ─────────────────────
    {
      number: 4,
      title: 'Images, Thumbnails and Video Editing',
      goal: 'Turn narration into an actual video.',
      days: [
        {
          number: 16,
          title: 'Canva Basics',
          learningGoal: 'Learn the basic Canva workspace.',
          estimatedTime: '90–120 min',
          videos: [
            {
              id: 'd16-v1',
              title: 'Design with Canva — "The Ultimate Canva 2025 Tutorial"',
              description: 'About 40 min. Beginner\'s guide with AI tools included.',
              url: 'https://www.youtube.com/results?search_query=Design+with+Canva+The+Ultimate+Canva+2025+Tutorial',
              embedId: null,
              isRewatch: false,
            },
          ],
          task: {
            id: 'd16-task',
            description: 'Create: Channel logo, Simple banner, One thumbnail.',
          },
          notes: null,
          checkpoint: null,
        },
        {
          number: 17,
          title: 'AI Images',
          learningGoal: 'Generate useful visuals without stealing photographs.',
          estimatedTime: '75–90 min',
          videos: [
            {
              id: 'd17-v1',
              title: 'Design with Canva — "The Ultimate Canva 2025 Tutorial" (AI Section)',
              description: 'Focus on the AI image generation section.',
              url: 'https://www.youtube.com/results?search_query=Design+with+Canva+The+Ultimate+Canva+2025+Tutorial',
              embedId: null,
              isRewatch: true,
            },
            {
              id: 'd17-v2',
              title: 'Microsoft Designer AI Image Generator Tutorial 2025',
              description: 'For beginners.',
              url: 'https://www.youtube.com/results?search_query=Microsoft+Designer+AI+image+generator+tutorial+2025+beginners',
              embedId: null,
              isRewatch: false,
            },
          ],
          task: {
            id: 'd17-task',
            description: 'Create 5 visuals related to Video #1.',
          },
          notes: null,
          checkpoint: null,
        },
        {
          number: 18,
          title: 'Thumbnails',
          learningGoal: 'Understand why the thumbnail and title work together.',
          estimatedTime: '75–90 min',
          videos: [
            {
              id: 'd18-v1',
              title: 'YouTube Creators — "How to Add Custom Thumbnails to Your YouTube Videos"',
              description: 'Short official lesson.',
              url: 'https://www.youtube.com/results?search_query=YouTube+Creators+How+to+Add+Custom+Thumbnails+to+Your+YouTube+Videos',
              embedId: null,
              isRewatch: false,
            },
            {
              id: 'd18-v2',
              title: 'YouTube Thumbnail Design 2025 (Beginner)',
              description: 'Search result.',
              url: 'https://www.youtube.com/results?search_query=YouTube+thumbnail+design+2025+beginner',
              embedId: null,
              isRewatch: false,
            },
          ],
          task: {
            id: 'd18-task',
            description: 'Create three different thumbnails for the same video.',
          },
          notes: null,
          checkpoint: null,
        },
        {
          number: 19,
          title: 'CapCut Basics',
          learningGoal: 'Learn the basic video timeline.',
          estimatedTime: '90–120 min',
          videos: [
            {
              id: 'd19-v1',
              title: 'Metics Media — "CapCut Tutorial for Beginners 2025 - Step by Step"',
              description: 'About 62 min.',
              url: 'https://www.youtube.com/watch?v=EMDrgqepVhM',
              embedId: 'EMDrgqepVhM',
              isRewatch: false,
            },
          ],
          task: {
            id: 'd19-task',
            description: 'Import narration, add images, trim clips and export a 30-second test.',
          },
          notes: null,
          checkpoint: null,
        },
        {
          number: 20,
          title: 'Assemble Video #1',
          learningGoal: 'Combine narration, visuals, captions and music.',
          estimatedTime: '120 min',
          videos: [
            {
              id: 'd20-v1',
              title: 'Rewatch: Metics Media — "CapCut Tutorial for Beginners 2025"',
              description: 'Relevant portions for assembly and workflow.',
              url: 'https://www.youtube.com/watch?v=EMDrgqepVhM',
              embedId: 'EMDrgqepVhM',
              isRewatch: true,
            },
          ],
          task: {
            id: 'd20-task',
            description: 'Finish Video #1. Upload it as Private or Unlisted first.',
          },
          notes: 'Milestone: You have now made a complete video!',
          checkpoint: null,
        },
      ],
      checklist: [
        { id: 'w4-c1', description: 'Comfortable with Canva' },
        { id: 'w4-c2', description: 'Can create basic AI images' },
        { id: 'w4-c3', description: 'Can create a thumbnail' },
        { id: 'w4-c4', description: 'Comfortable with CapCut' },
        { id: 'w4-c5', description: 'Completed first video' },
      ],
    },

    // ───────────────────── WEEK 5 ─────────────────────
    {
      number: 5,
      title: 'Become a YouTube Creator',
      goal: 'Learn publishing, titles, descriptions, thumbnails and basic SEO.',
      days: [
        {
          number: 21,
          title: 'Create the Channel',
          learningGoal: 'Set up a professional-looking YouTube channel.',
          estimatedTime: '75–90 min',
          videos: [
            {
              id: 'd21-v1',
              title: 'Pat Machadu — "How to Create a YouTube Channel in 2025: Step by Step"',
              description: 'About 15–25 min.',
              url: 'https://www.youtube.com/results?search_query=Pat+Machadu+How+to+Create+a+YouTube+Channel+in+2025',
              embedId: null,
              isRewatch: false,
            },
          ],
          task: {
            id: 'd21-task',
            description: 'Create the channel and add: Name, Profile image, Banner, About description.',
          },
          notes: null,
          checkpoint: null,
        },
        {
          number: 22,
          title: 'Titles',
          learningGoal: 'Write titles that make viewers curious without lying.',
          estimatedTime: '60–90 min',
          videos: [
            {
              id: 'd22-v1',
              title: 'Think Media — "How to Write Better YouTube Titles & Get More Views!"',
              description: 'About 15 min.',
              url: 'https://www.youtube.com/watch?v=A7rR0Zi9Nx0',
              embedId: 'A7rR0Zi9Nx0',
              isRewatch: false,
            },
          ],
          task: {
            id: 'd22-task',
            description: 'Write 10 titles for Video #1. Choose the best 2.',
          },
          notes: null,
          checkpoint: null,
        },
        {
          number: 23,
          title: 'YouTube SEO',
          learningGoal: 'Understand how viewers find videos.',
          estimatedTime: '75–90 min',
          videos: [
            {
              id: 'd23-v1',
              title: 'Think Media — "How to Rank in YouTube Search (SEO Beginners Guide)"',
              description: 'About 31 min.',
              url: 'https://www.youtube.com/results?search_query=Think+Media+How+to+Rank+in+YouTube+Search+SEO+Beginners+Guide',
              embedId: null,
              isRewatch: false,
            },
          ],
          task: {
            id: 'd23-task',
            description: "Find 10 search phrases using YouTube's own search box.",
          },
          notes: 'Do not buy a vidIQ or TubeBuddy trial just because a tutorial mentions it. YouTube search is enough at this stage.',
          checkpoint: null,
        },
        {
          number: 24,
          title: 'Publish Video #1',
          learningGoal: 'Learn the complete upload process.',
          estimatedTime: '60–90 min',
          videos: [
            {
              id: 'd24-v1',
              title: 'YouTube Help — "Upload YouTube Videos"',
              description: 'Short official guide.',
              url: 'https://www.youtube.com/results?search_query=YouTube+Help+Upload+YouTube+Videos',
              embedId: null,
              isRewatch: false,
            },
          ],
          task: {
            id: 'd24-task',
            description: 'Publish Video #1. Add: Title, Description, Thumbnail, Chapters if useful, Playlist.',
          },
          notes: null,
          checkpoint: null,
        },
        {
          number: 25,
          title: 'Copyright and YouTube Rules',
          learningGoal: 'Avoid building a channel that cannot be monetized later.',
          estimatedTime: '60–75 min',
          videos: [
            {
              id: 'd25-v1',
              title: 'YouTube Creators / YouTube Help — Monetization Policies',
              description: 'About 20 min.',
              url: 'https://www.youtube.com/results?search_query=YouTube+Creators+monetization+policies',
              embedId: null,
              isRewatch: false,
            },
          ],
          task: {
            id: 'd25-task',
            description:
              'Audit Video #1: Did I copy another person\'s script? Did I use copyrighted footage? Did I add my own explanation? Did AI merely assist me?',
          },
          notes: 'For an AI-assisted news channel, this is especially important. YouTube\'s monetization rules can reject mass-produced, repetitive or copied content. Original explanation and creative value matter.',
          checkpoint: null,
        },
      ],
      checklist: [
        { id: 'w5-c1', description: 'Created channel' },
        { id: 'w5-c2', description: 'Added branding' },
        { id: 'w5-c3', description: 'Understands titles' },
        { id: 'w5-c4', description: 'Understands basic SEO' },
        { id: 'w5-c5', description: 'Published Video #1' },
        { id: 'w5-c6', description: 'Understands copyright basics' },
      ],
    },

    // ───────────────────── WEEK 6 ─────────────────────
    {
      number: 6,
      title: 'Produce Faster and Better',
      goal: 'Stop thinking about individual tools and start thinking about a repeatable production system.',
      days: [
        {
          number: 26,
          title: 'Build the Production Checklist',
          learningGoal: 'Create a repeatable workflow.',
          estimatedTime: '60–75 min',
          videos: [
            {
              id: 'd26-v1',
              title: 'Metics Media — "CapCut Tutorial for Beginners 2025 - Step by Step"',
              description: 'About 62 min. Use the workflow/assembly portions as the practical production example.',
              url: 'https://www.youtube.com/watch?v=EMDrgqepVhM',
              embedId: 'EMDrgqepVhM',
              isRewatch: true,
            },
          ],
          task: {
            id: 'd26-task',
            description:
              'Create this workflow: Idea → Research → Fact-check → Outline → Script → Voice → Visuals → Edit → Thumbnail → Upload → Analytics.',
          },
          notes: null,
          checkpoint: null,
        },
        {
          number: 27,
          title: 'Make Video #2',
          learningGoal: 'Repeat the process with less help.',
          estimatedTime: '120 min',
          videos: [
            {
              id: 'd27-v1',
              title: 'Rewatch: 10 min of ChatGPT Tutorial',
              description: 'Review the sections you need.',
              url: 'https://www.youtube.com/watch?v=PDw3Uk9dN9k',
              embedId: 'PDw3Uk9dN9k',
              isRewatch: true,
            },
            {
              id: 'd27-v2',
              title: 'Rewatch: 10 min of CapCut Tutorial',
              description: 'Review the sections you need.',
              url: 'https://www.youtube.com/watch?v=EMDrgqepVhM',
              embedId: 'EMDrgqepVhM',
              isRewatch: true,
            },
          ],
          task: {
            id: 'd27-task',
            description: 'Produce Video #2.',
          },
          notes: null,
          checkpoint: null,
        },
        {
          number: 28,
          title: 'Captions and Accessibility',
          learningGoal: 'Make videos easier to understand.',
          estimatedTime: '75–90 min',
          videos: [
            {
              id: 'd28-v1',
              title: 'Rewatch: Caption Section of Metics Media — CapCut Tutorial 2025',
              description: 'Focus on the captions/subtitles section.',
              url: 'https://www.youtube.com/watch?v=EMDrgqepVhM',
              embedId: 'EMDrgqepVhM',
              isRewatch: true,
            },
          ],
          task: {
            id: 'd28-task',
            description: 'Add captions to Video #2 and check them manually.',
          },
          notes: null,
          checkpoint: null,
        },
        {
          number: 29,
          title: 'Storytelling',
          learningGoal: 'Keep viewers interested after the first 30 seconds.',
          estimatedTime: '75–90 min',
          videos: [
            {
              id: 'd29-v1',
              title: 'Wes McDowell — "YouTube Script Writing For Beginners (2026 Algorithm)"',
              description: 'About 20 min. Covers a structured script formula and viewer-retention principles.',
              url: 'https://www.youtube.com/watch?v=h8HlzJFJ-3k',
              embedId: 'h8HlzJFJ-3k',
              isRewatch: false,
            },
          ],
          task: {
            id: 'd29-task',
            description: 'Rewrite the first 30 seconds of Video #3 three different ways.',
          },
          notes: null,
          checkpoint: null,
        },
        {
          number: 30,
          title: 'Publish Video #2 + Review Video #1',
          learningGoal: 'Start using data rather than guessing.',
          estimatedTime: '90 min',
          videos: [
            {
              id: 'd30-v1',
              title: 'YouTube — "Get Started With YouTube Analytics"',
              description: 'Official lesson.',
              url: 'https://www.youtube.com/results?search_query=YouTube+Get+Started+With+YouTube+Analytics',
              embedId: null,
              isRewatch: false,
            },
          ],
          task: {
            id: 'd30-task',
            description:
              'Publish Video #2 and review Video #1 analytics: Views, Impressions, Click-through rate, Average view duration, Audience retention.',
          },
          notes: null,
          checkpoint: null,
        },
      ],
      checklist: [
        { id: 'w6-c1', description: 'Created Video #2' },
        { id: 'w6-c2', description: 'Published Video #2' },
        { id: 'w6-c3', description: 'Added captions' },
        { id: 'w6-c4', description: 'Improved storytelling' },
        { id: 'w6-c5', description: 'Looked at Analytics' },
      ],
    },

    // ───────────────────── WEEK 7 ─────────────────────
    {
      number: 7,
      title: 'Turn AI Skills Into Income',
      goal: 'Explore at least four AI-assisted income opportunities.',
      days: [
        {
          number: 31,
          title: 'Understand AI-Assisted Freelancing',
          learningGoal: 'Learn what people actually pay for.',
          estimatedTime: '75–90 min',
          videos: [
            {
              id: 'd31-v1',
              title: 'The Cutting Edge School — "AI Freelancing 2026 Guide for Beginners"',
              description: 'About 20 min.',
              url: 'https://www.youtube.com/watch?v=-LCkwnpUilI',
              embedId: '-LCkwnpUilI',
              isRewatch: false,
            },
          ],
          task: {
            id: 'd31-task',
            description: 'List 10 services you could offer using the tools you now know.',
          },
          notes: null,
          checkpoint: null,
        },
        {
          number: 32,
          title: 'AI-Assisted Writing',
          learningGoal: 'Turn AI into a writing assistant rather than a replacement writer.',
          estimatedTime: '90 min',
          videos: [
            {
              id: 'd32-v1',
              title: 'Rewatch: Kevin Stratvert — "How to Use ChatGPT (2025)"',
              description: 'About 18 min.',
              url: 'https://www.youtube.com/watch?v=PDw3Uk9dN9k',
              embedId: 'PDw3Uk9dN9k',
              isRewatch: true,
            },
            {
              id: 'd32-v2',
              title: 'AI Content Writing Freelance Beginner 2025',
              description: 'Search result.',
              url: 'https://www.youtube.com/results?search_query=AI+content+writing+freelance+beginner+2025',
              embedId: null,
              isRewatch: false,
            },
          ],
          task: {
            id: 'd32-task',
            description: 'Create: One 500-word article, Five social posts, One email newsletter.',
          },
          notes: null,
          checkpoint: null,
        },
        {
          number: 33,
          title: 'AI Virtual Assistant Work',
          learningGoal: 'Understand how AI can speed up ordinary office work.',
          estimatedTime: '90 min',
          videos: [
            {
              id: 'd33-v1',
              title: 'Chad Godoy — "Virtual Assistant Tutorial for Beginners | Free VA Training - Day 1"',
              description: 'About 1 hr 40 min. Focus on the sections covering the role and core VA skills.',
              url: 'https://www.youtube.com/watch?v=QtrkR5gzz8U',
              embedId: 'QtrkR5gzz8U',
              isRewatch: false,
            },
          ],
          task: {
            id: 'd33-task',
            description: 'Create a sample client package: Meeting summary, Task list, Follow-up email, Spreadsheet of tasks.',
          },
          notes: null,
          checkpoint: null,
        },
        {
          number: 34,
          title: 'SOPs and Process Documents',
          learningGoal: 'Learn how to turn information into a professional procedure.',
          estimatedTime: '90 min',
          videos: [
            {
              id: 'd34-v1',
              title: 'Kevin Stratvert — "How to Use ChatGPT (2025)"',
              description: 'About 18 min. Use the prompting sections to build and refine SOPs.',
              url: 'https://www.youtube.com/watch?v=PDw3Uk9dN9k',
              embedId: 'PDw3Uk9dN9k',
              isRewatch: true,
            },
          ],
          task: {
            id: 'd34-task',
            description:
              'Pick something simple, such as "How to onboard a new volunteer." Create a professional 2-page SOP with AI assistance.',
          },
          notes: null,
          checkpoint: null,
        },
        {
          number: 35,
          title: 'Choose the Best Side Income',
          learningGoal: 'Pick one income path to test rather than trying everything.',
          estimatedTime: '75–90 min',
          videos: [
            {
              id: 'd35-v1',
              title: 'The Cutting Edge School — "AI Freelancing 2026 Guide for Beginners"',
              description: 'About 20 min.',
              url: 'https://www.youtube.com/watch?v=-LCkwnpUilI',
              embedId: '-LCkwnpUilI',
              isRewatch: true,
            },
          ],
          task: {
            id: 'd35-task',
            description:
              'Score the four ideas on: Ease, Interest, Demand, Competition, Ability to demonstrate skill, Ability to do from home.',
          },
          notes: null,
          checkpoint: 'Explain the chosen service in one sentence.',
        },
      ],
      checklist: [
        { id: 'w7-c1', description: 'Explored AI writing' },
        { id: 'w7-c2', description: 'Explored virtual assistant work' },
        { id: 'w7-c3', description: 'Explored SOP/document work' },
        { id: 'w7-c4', description: 'Explored YouTube production services' },
        { id: 'w7-c5', description: 'Chosen one income idea' },
        { id: 'w7-c6', description: 'Started a portfolio' },
      ],
    },

    // ───────────────────── WEEK 8 ─────────────────────
    {
      number: 8,
      title: 'Become Independent',
      goal: 'Stop following tutorials step-by-step. Use the skills independently.',
      days: [
        {
          number: 36,
          title: 'Video #3: Research',
          learningGoal: 'Research an African topic independently.',
          estimatedTime: '90–120 min',
          videos: [],
          task: {
            id: 'd36-task',
            description: 'Research and outline Video #3 using: Perplexity, Gemini, ChatGPT, and at least 3 original sources.',
          },
          notes: 'No new tutorial — use what you have learned.',
          checkpoint: null,
        },
        {
          number: 37,
          title: 'Video #3: Production',
          learningGoal: 'Produce a video with minimal outside help.',
          estimatedTime: '120 min',
          videos: [],
          task: {
            id: 'd37-task',
            description: 'Script + voice + visuals + edit. Rewatch only whatever section is needed.',
          },
          notes: null,
          checkpoint: null,
        },
        {
          number: 38,
          title: 'Video #3: Publish',
          learningGoal: 'Independently publish a complete video.',
          estimatedTime: '90 min',
          videos: [],
          task: {
            id: 'd38-task',
            description: 'Publish Video #3. Create two thumbnail versions and choose the stronger one.',
          },
          notes: null,
          checkpoint: null,
        },
        {
          number: 39,
          title: 'Build the Income Sample',
          learningGoal: 'Create something that could actually be shown to a potential client.',
          estimatedTime: '90–120 min',
          videos: [
            {
              id: 'd39-v1',
              title: 'The Cutting Edge School — "AI Freelancing 2026 Guide for Beginners"',
              description: 'About 20 min. Use the sections on choosing a service and presenting your work.',
              url: 'https://www.youtube.com/watch?v=-LCkwnpUilI',
              embedId: '-LCkwnpUilI',
              isRewatch: true,
            },
          ],
          task: {
            id: 'd39-task',
            description: 'Build a tiny portfolio containing: One research sample, One AI-assisted article, One SOP, One YouTube script, One thumbnail.',
          },
          notes: null,
          checkpoint: null,
        },
        {
          number: 40,
          title: 'Final Exam: Do It Without the Tutorial',
          learningGoal: 'Prove you can work independently.',
          estimatedTime: 'Up to 2 hours',
          videos: [],
          task: {
            id: 'd40-task',
            description:
              'Create a 5-minute YouTube video about an African current event: 1) Research it, 2) Fact-check it, 3) Write the script, 4) Create narration, 5) Create visuals, 6) Edit it, 7) Make a thumbnail, 8) Publish it, 9) Explain why you chose the title.',
          },
          notes: null,
          checkpoint: null,
        },
      ],
      checklist: [
        { id: 'w8-c1', description: 'Created Video #3 independently' },
        { id: 'w8-c2', description: 'Published Video #3' },
        { id: 'w8-c3', description: 'Created income sample' },
        { id: 'w8-c4', description: 'Completed final project' },
        { id: 'w8-c5', description: 'Can explain the entire AI-to-YouTube workflow' },
      ],
    },
  ],
}

export default lessonPlan