{%- set _mod_docs_content_type = "PROCEDURE" %}
# Monitoring your application and image vulnerabilities metrics {id="odc-monitoring-your-application-image-vulnerabilities-metrics_{{ context }}"}

After you create applications in your project and deploy them, use the **Developer** perspective in the web console to see the metrics for your application dependency vulnerabilities across your cluster. The metrics help you to analyze the following image vulnerabilities in detail:

*   Total count of vulnerable images in a selected project
*   Severity-based counts of all vulnerable images in a selected project
*   Drilldown into severity to obtain the details, such as count of vulnerabilities, count of fixable vulnerabilities, and number of affected pods for each vulnerable image

**Prerequisites**

*   You have installed the {{ quay }} Container Security operator from the Operator Hub.

    :::note

    The {{ quay }} Container Security operator detects vulnerabilities by scanning the images that are in the quay registry.
    
    :::


**Procedure**

1.  For a general overview of the image vulnerabilities, on the navigation panel of the **Developer** perspective, click **Project** to see the project dashboard.
1.  Click **Image Vulnerabilities** in the **Status** section. The window that opens displays details such as **Vulnerable Container Images** and **Fixable Container Images**.
1.  For a detailed vulnerabilities overview, click the **Vulnerabilities** tab on the project dashboard.
    1.  To get more detail about an image, click its name.
    1.  View the default graph with all types of vulnerabilities in the **Details** tab.
    1.  Optional: Click the toggle button to view a specific type of vulnerability. For example, click **App dependency** to see vulnerabilities specific to application dependency.
    1.  Optional: You can filter the list of vulnerabilities based on their **Severity** and **Type** or sort them by **Severity**, **Package**, **Type**, **Source**, **Current Version**, and **Fixed in Version**.
    1.  Click a **Vulnerability** to get its associated details:
        *   **Base image** vulnerabilities display information from a Red Hat Security Advisory (RHSA).
        *   **App dependency** vulnerabilities display information from the Snyk security application.