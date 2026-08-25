{%- set _mod_docs_content_type = "PROCEDURE" %}
# Accessing {{ op_system }} AMIs with stream metadata {id="installation-aws-ami-stream-metadata_{{ context }}"}

To find the correct {{ op_system }} boot image for your cluster, you can use stream metadata, which provides standardized information about {{ op_system }} in the JSON format. {._abstract}

You can use the `coreos print-stream-json` subcommand of `openshift-install` to access information about the boot images in the stream metadata format. This command provides a method for printing stream metadata in a scriptable, machine-readable format.

For user-provisioned installations, the `openshift-install` binary has references to the version of {{ op_system }} boot images that are tested for use with {{ product_title }}, such as the {{ aws_first }} AMI.

To parse the stream metadata, use one of the following methods:

**Procedure**

*   From a Go program, use the official `stream-metadata-go` library at https://github.com/coreos/stream-metadata-go. You can also view example code in the library.
*   From another programming language, such as Python or Ruby, use the JSON library of your preferred programming language.
*   From a command-line utility that handles JSON data, such as `jq`, print the current `x86_64`
    {%- if not openshift_origin %}
    or `aarch64`
    {%- endif %}
    AMI for an {{ aws_short }} region, such as `us-west-1`:
    ```terminal title="For x86_64"
    $ openshift-install coreos print-stream-json | jq -r '.architectures.x86_64.images.aws.regions["us-west-1"].image'
    ```
    ```terminal title="Example output"
    ami-0d3e625f84626bbda
    ```
{% if not openshift_origin %}
    ```terminal title="For aarch64"
    $ openshift-install coreos print-stream-json | jq -r '.architectures.aarch64.images.aws.regions["us-west-1"].image'
    ```
    ```terminal title="Example output"
    ami-0af1d3b7fa5be2131
    ```
{%- endif %}

    The output of this command is the {{ aws_short }} AMI ID for your designated architecture and the `us-west-1` region. The AMI must belong to the same region as the cluster.