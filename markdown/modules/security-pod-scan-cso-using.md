{%- set _mod_docs_content_type = "PROCEDURE" %}
# Using the {{ rhq_cso }} {id="security-pod-scan-cso-using_{{ context }}"}

You can use the {{ rhq_cso }} to access vulnerability scan results from the {{ product_title }} web console. {._abstract}

The following procedure shows you how to use the {{ rhq_cso }}.

**Prerequisites**

*   You have installed the {{ rhq_cso }}.

**Procedure**

1.  On the {{ product_title }} web console, navigate to **Home** → **Overview**. Under the **Status** section, **Image Vulnerabilities** provides the number of vulnerabilities found.
1.  Click **Image Vulnerabilities** to reveal the **Image Vulnerabilities breakdown** tab, which details the severity of the vulnerabilities, whether the vulnerabilities can be fixed, and the total number of vulnerabilities.
1.  You can address detected vulnerabilities in one of two ways:
    1.  Select a link under the **Vulnerabilities** section. This takes you to the container registry that the container came from, where you can see information about the vulnerability.
    1.  Select the **namespace** link. This takes you to the **Image Manifest Vulnerabilities** page, where you can see the name of the selected image and all of the namespaces where that image is running.
1.  After you have learned what images are vulnerable, how to fix those vulnerabilities, and the namespaces that the images are being run in, you can improve security by performing the following actions:
    1.  Alert anyone in your organization who is running the image and request that they correct the vulnerability.
    1.  Stop the images from running by deleting the deployment or other object that started the pod that the image is in.

        :::note

        If you delete the pod, it might take several minutes for the vulnerability information to reset on the dashboard.
        
        :::