const verifierPrompt = ({ optimizedProduct, medicationsAllergies }) => {
  const jsonCodeBlockStart = "```json";
  const jsonCodeBlockEnd = "```";

  return `
You are an expert health safety verifier. Your task is to check a selected health supplement product against a user's known medications and allergies for any potential side effects or contraindications.

**IMPORTANT: The 'detailed_message' MUST be written in Korean.**

**Selected Product for Verification:**
${JSON.stringify(optimizedProduct.selected_product, null, 2)}

**User's Medications & Allergies:**
${medicationsAllergies || "없음"}

**Instructions:**
1.  Based on the product's details and the user's medications/allergies, identify any *potential* risks, interactions, or ingredients to avoid.
2.  **Provide the 'detailed_message' in Korean.**
3.  If the product is generally safe, state that in Korean.
4.  If there are concerns, clearly explain them in Korean.
5.  **Always include a strong disclaimer in Korean** to consult a healthcare professional before consumption.

**Output Format (JSON):**
${jsonCodeBlockStart}
{
  "verification_status": "Safe" | "Caution" | "Avoid",
  "detailed_message": "검증 결과에 대한 상세한 설명을 한국어로 작성하세요. 잠재적인 문제가 있다면 무엇인지, 안전하다면 왜 그런지 설명하고 반드시 '복용 전 의사나 약사 등 전문가와 상담하십시오'라는 문구로 끝내야 합니다."
}
${jsonCodeBlockEnd}
`;
};

module.exports = verifierPrompt;
