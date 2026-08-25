{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring storage throughput for gp3 drives {id="machine-feature-aws-throughput-capi_{{ context }}"}

You can improve performance for high traffic services by increasing the throughput of gp3 storage volumes in an {{ aws_short }} cluster.
You can configure the storage throughput for the root volume, non root volumes, or both. {._abstract}

To deploy compute machines with your configuration, configure the appropriate values in a machine template YAML file.
Then, configure a machine set YAML file to reference the machine template when it deploys machines.

**Prerequisites**

*   You use gp3 storage volume(s).

**Procedure**

*   On the machine template in which you want to configure throughput, add the `throughput` parameter:
    ```yaml
    apiVersion: infrastructure.cluster.x-k8s.io/v1beta2
    kind: AWSMachineTemplate
    # ...
    spec:
      template:
        spec:
          nonRootVolumes:
          - throughput: <throughput_value>
          rootVolume:
            throughput: <throughput_value>
    # ...
    ```

    where:

    `<throughput_value>`
    :   Specifies a value in MiB per second between 125 and 2,000.
        You can only edit this value on gp3 volumes.
        The default value is `125`.