package com.resumeanalyzer.backend.service;

import org.springframework.stereotype.Service;

@Service
public class AIService {

    public String analyzeResume(String resumeText) {

        return """
        Score: 8/10

        Strengths:
        - Strong React and frontend skills
        - Good project experience
        - Clean and readable resume

        Weaknesses:
        - Lacks quantified achievements
        - Limited backend exposure
        - Missing strong summary section

        Suggestions:
        - Add measurable results (e.g., improved performance by 25%)
        - Include backend technologies like Spring Boot
        - Improve resume summary with impact-driven language
        """;
    }
}