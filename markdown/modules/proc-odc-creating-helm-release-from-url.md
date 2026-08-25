{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing a Helm release from a URL {id="odc-creating-helm-release-from-url_{{ context }}"}

A Helm release is a deployed instance of a Helm chart within your {{ product_title }} cluster. You can install charts from the developer catalog or by using a direct chart URL. Using a direct URL avoids the need for a configured Helm repository. However, this method circumvents the validation provided by the developer catalog. Use the direct URL method only when a chart is not available from the developer catalog or configured repositories. {._abstract}


:::warning

Installing a Helm chart from a direct URL bypasses the validation checks provided by the developer catalog. Install charts only from URLs you trust, because unverified charts can introduce security risks to your cluster. When possible, use charts from the developer catalog or a configured Helm repository instead.

:::


**Prerequisites**

*   You’ve logged in to the {{ product_title }} web console.
*   You have the necessary project permissions to install a Helm chart.
*   You have a URL for a Helm chart.

**Procedure**

1.  In the {{ product_title }} web console, select ***Ecosystem > Helm*** from the navigation menu. The ***Helm*** view opens.
1.  In the ***Project*** drop-down menu, select the project where you want to install the Helm release; for example, ***default***.
1.  From the ***Helm Releases*** tab, click ***Create***.
1.  Select ***Helm chart URL****. The **Install Helm chart from URL*** view opens.
1.  In the ***Chart URL*** field, enter the URL for the Helm chart you want to install.
    **📌 NOTE**\
    For Helm charts stored in an OCI-compliant registry, the URL must use the `oci://` protocol; for example, `oci://quay.io/organization/repository/chart-name`.
1.  In the ***Release name*** field, enter a name for the Helm release you want to install.
1.  In the ***Chart version*** field, enter the chart version number if it is not detected automatically.
1.  Click ***Next****. The **Configure Helm release*** view opens.
    *   Review the configuration. Make sure that **Chart URL**, **Release name**, and **Chart version** are correct.
1.  For the ***Configure via*** option, select either ***Form view*** or ***YAML view***. 
    *   Choose ***Form view*** (the default) for a guided configuration of standard parameters. 
    *   Choose ***YAML view*** if you need to modify advanced settings that are not available in the form view.
        **📌 NOTE**\
        The ***Form view*** might not display every field from your Helm chart. For full control over all configuration parameters, select ***YAML view***. 
1.  Click ***Install****. The **Helm Releases*** tab opens and, if the release installation is successful, its status is ***Deployed***.

**Verification**

*   The new Helm release is listed in the table on the ***Helm Releases*** tab.
*   The ***Status*** column for the Helm release displays ***Deployed***.

**Additional resources**
{._additional-resources}

*   [Official Helm documentation](https://helm.sh)
*   [Quay OCI artifact support for Helm charts](https://www.redhat.com/en/blog/quay-oci-artifact-support-for-helm-charts)