{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling or disabling usage metrics using the web console {id="efs-metrics-procedure-gui_{{ context }}"}

To monitor Elastic File System (EFS) volume space consumption through the web console, enable usage metrics by configuring the `ClusterCSIDriver` resource with recursive walk parameters. {._abstract}

**Prerequisites**

*   Access to
    {%- if openshift_rosa or openshift_rosa_hcp %}
 a {{ product_title }} cluster
{% endif %}
{% if not (openshift_rosa or openshift_rosa_hcp) %}
 an {{ product_title }} cluster
{%- endif %}
with administrator rights

**Procedure**

1.  Click **Administration** > **CustomResourceDefinitions**.
1.  On the **CustomResourceDefinitions** page next to the **Name** dropdown box, type `clustercsidriver`.
1.  Click **CRD ClusterCSIDriver**.
1.  Click the **YAML** tab.
1.  Under `spec.aws.efsVolumeMetrics.state`:
    *   **Enable** metrics: Set the value to `RecursiveWalk`. RecursiveWalk` indicates that volume metrics collection in the AWS EFS CSI Driver is performed by recursively walking through the files in the volume.
    *   **Disable** metrics: set the value to `Disabled`.
        ```yaml title="Example ClusterCSIDriver efs.csi.aws.com YAML file"
        spec:
            driverConfig:
                driverType: AWS
                aws:
                    efsVolumeMetrics:
                      state: RecursiveWalk
                      recursiveWalk:
                        refreshPeriodMinutes: 100
                        fsRateLimit: 10
        ```
1.  Optional: To define how the recursive walk operates, you can also set the following fields:
    *   `refreshPeriodMinutes`: Specifies the refresh frequency for volume metrics in minutes. If this field is left blank, a reasonable default is chosen, which is subject to change over time. The current default is 240 minutes. The valid range is 1 to 43,200 minutes.
    *   `fsRateLimit`: Defines the rate limit for processing volume metrics in goroutines per file system. If this field is left blank, a reasonable default is chosen, which is subject to change over time. The current default is 5 goroutines. The valid range is 1 to 100 goroutines.
1.  Click **Save**.