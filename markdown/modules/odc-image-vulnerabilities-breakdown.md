{%- set _mod_docs_content_type = "CONCEPT" %}
# Image vulnerabilities breakdown {id="odc-image-vulnerabilities-breakdown_{{ context }}"}

In the **Developer** perspective, the project dashboard shows the **Image Vulnerabilities** link in the **Status** section. Using this link, you can view the **Image Vulnerabilities breakdown** window, which includes details regarding vulnerable container images and fixable container images. The icon color indicates severity:

*   Red: High priority. Fix immediately.
*   Orange: Medium priority. Can be fixed after high-priority vulnerabilities.
*   Yellow: Low priority. Can be fixed after high and medium-priority vulnerabilities.

Based on the severity level, you can prioritize vulnerabilities and fix them in an organized manner.

**Figure 1. Viewing image vulnerabilities**

![odc_image_vulnerabilities](/images/odc_image_vulnerabilities.png)