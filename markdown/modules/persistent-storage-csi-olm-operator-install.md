{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the {{ FeatureName }} CSI Driver Operator {id="persistent-storage-csi-olm-operator-install_{{ context }}"}

Install and configure the {{ FeatureName }} Container Storage Interface (CSI) Driver Operator to enable {{ FeatureName }} storage in your cluster. This Red&#160;Hat Operator is not installed by default and requires manual installation. {._abstract}

{% if context == "persistent-storage-csi-aws-efs" %}
{%- set restricted = true -%}
{% endif %}

{% if context == "osd-persistent-storage-aws-efs-csi" %}
{%- set restricted = true -%}
{% endif %}

{% if context == "rosa-persistent-storage-aws-efs-csi" %}
{%- set restricted = true -%}
{% endif %}

**Prerequisites**

*   Access to the {{ product_title }} web console.

**Procedure**

1.  Log in to the web console.
1.  Install the {{ FeatureName }} CSI Operator:
    1.  Click **Ecosystem** → **Software Catalog**.
    1.  Locate the {{ FeatureName }} CSI Operator by typing **{{ FeatureName }} CSI** in the filter box.
    1.  Click the **{{ FeatureName }} CSI Driver Operator** button.

{% if restricted %}

    :::important

    Be sure to select the **{{ FeatureName }} CSI Driver Operator** and not the **{{ FeatureName }} Operator**. The **{{ FeatureName }} Operator** is a community Operator and is not supported by Red Hat.
    
    :::

{% endif %}
    1.  On the **{{ FeatureName }} CSI Driver Operator** page, click **Install**.
    1.  On the **Install Operator** page, ensure that:
{% if restricted %}
{% if openshift_enterprise or openshift_dedicated or openshift_rosa %}
        *   If you are using {{ FeatureName }} with AWS Secure Token Service (STS), in the **role ARN** field, enter the ARN role copied from the last step of the _Obtaining a role Amazon Resource Name for Security Token Service_ procedure.
{% endif %}
{%- endif %}
        *   **All namespaces on the cluster (default)** is selected.
        *   **Installed Namespace** is set to **openshift-cluster-csi-drivers**.
    1.  Click **Install**.

        After the installation finishes, the {{ FeatureName }} CSI Operator is listed in the **Installed Operators** section of the web console.

{% if context == "persistent-storage-csi-aws-efs" %}
{%- set restricted = "" -%}
{% endif %}

{% if context == "osd-persistent-storage-aws-efs-csi" %}
{%- set restricted = "" -%}
{% endif %}

{% if context == "rosa-persistent-storage-aws-efs-csi" %}
{%- set restricted = "" -%}
{% endif %}

**Next steps**

Install the {{ FeatureName }} CSI Driver.