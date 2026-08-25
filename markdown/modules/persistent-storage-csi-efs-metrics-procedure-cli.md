{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling or disabling usage metrics using the CLI {id="efs-metrics-procedure-cli_{{ context }}"}

To monitor Elastic File System (EFS) volume space consumption through the command-line interface, enable usage metrics by configuring the `ClusterCSIDriver` resource with recursive walk parameters. {._abstract}

You can also disable usage metrics as needed.

**Prerequisites**

*   Access to
    {%- if openshift_rosa or openshift_rosa_hcp %}
 a {{ product_title }} cluster
{% endif %}
{% if not (openshift_rosa or openshift_rosa_hcp) %}
 an {{ product_title }} cluster
{%- endif %}
with administrator rights
*   Access to {{ product_title }} CLI (`oc`)

**Procedure**

1.  Edit `ClusterCSIDriver` by running the following command:
    ```terminal
    $ oc edit clustercsidriver efs.csi.aws.com
    ```
1.  Under `spec.aws.efsVolumeMetrics.state`:
    *   **Enable** metrics: Set the value to `RecursiveWalk`. `RecursiveWalk` indicates that volume metrics collection in the AWS EFS CSI Driver is performed by recursively walking through the files in the volume.
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
1.  Save the changes to the `efs.csi.aws.com` object.