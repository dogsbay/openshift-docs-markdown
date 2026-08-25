{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring storage throughput for gp3 drives {id="machineset-creating-gp3-throughput_{{ context }}"}

You can improve performance for high traffic services by increasing the throughput of gp3 storage volumes in an {{ aws_short }} cluster.
You can configure the storage throughput by editing your compute or control plane machine set. {._abstract}

**Prerequisites**

*   You use gp3 storage volume(s).

**Procedure**

*   Add or edit the following lines under the `providerSpec` field in your compute or control plane machine set:
    ```yaml
    providerSpec:
      value:
        blockDevices:
          - ebs:
              throughputMib: <throughput_value>
    ```

    where:

    `<throughput_value>`
    :   Specifies a value in MiB per second between 125 and 2,000.
        You can only edit this value on gp3 volumes.
        The default value is `125`.