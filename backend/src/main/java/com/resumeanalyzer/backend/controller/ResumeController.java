package com.resumeanalyzer.backend.controller;

import com.resumeanalyzer.backend.service.AIService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;

@RestController
@CrossOrigin(origins = "https://resume-analyzer-zeta-taupe.vercel.app")
@RequestMapping("/api/resume")
public class ResumeController {

    @Autowired
    private AIService aiService;

    @PostMapping("/upload")
    public String uploadResume(@RequestParam("file") MultipartFile file) {

        if (file.isEmpty()) {
            return "File is empty!";
        }

        try {
            PDDocument document = PDDocument.load(file.getInputStream());
            PDFTextStripper pdfStripper = new PDFTextStripper();

            String text = pdfStripper.getText(document);
            document.close();

            // Send to AI
            String aiResponse = aiService.analyzeResume(text);

            return aiResponse;

        } catch (Exception e) {
            e.printStackTrace();
            return "Error processing resume";
        }
    }
}