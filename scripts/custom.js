
function showHideDtls() {
    const initialText = "Experienced Java backend developer with a proven track record in designing and implementing scalable and high-performance applications. Possesses a strong understanding of software development principles and extensive hands-on experience in developing robust backend systems using Java, Spring, and Hibernate. Skilled in optimizing database performance and ensuring data integrity. Proficient in working with RESTful APIs and integrating third-party services. Excels in collaborating with cross-functional...";
    const fullText = "Experienced Java backend developer with a proven track record in designing and implementing scalable and high-performance applications. Possesses a strong understanding of software development principles and extensive hands-on experience in developing robust backend systems using Java, Spring, and Hibernate. Skilled in optimizing database performance and ensuring data integrity. Proficient in working with RESTful APIs and integrating third-party services. Excels in collaborating with cross-functional teams to deliver innovative solutions that meet business requirements. Committed to continuous learning and staying up-to-date with the latest technologies in the Java ecosystem. Seeking a challenging position where I can leverage my skills to contribute to the success of a dynamic organization.";

    var content = document.getElementById("summeryText");
    var anchorTag = document.getElementById("collapse");
    if (anchorTag.textContent === "Learn More") {
        content.innerText = fullText;
        anchorTag.textContent = "Show Less";
    } else {
        content.innerText = initialText;
        anchorTag.textContent = "Learn More";
    }
}