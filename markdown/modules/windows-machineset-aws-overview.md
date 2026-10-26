{%- set _mod_docs_content_type = "CONCEPT" %}
# Windows machine set on AWS {id="windows-machineset-aws-overview_{{ context }}"}

You can use a `MachineSet` custom resource (CR) to add a Windows compute node to your {{ aws_full }} cluster, where you can run Windows container workloads. {._abstract}

For example, you might create infrastructure Windows machine sets and related machines so that you can move supporting Windows workloads to the new Windows machines. For more information about machine sets, see "Overview of machine management" in the _Additional resources_ section.

## Prerequisites {id="_prerequisites"}

*   You have installed the Windows Machine Config Operator (WMCO) using Operator Lifecycle Manager (OLM).
*   You are using a supported Windows Server as the operating system image.

    Use one of the following `aws` commands, as appropriate for your Windows Server release, to query valid AMI images:
    ```terminal title="Example Windows Server 2025 command"
    $ aws ec2 describe-images --region <aws_region_name> --filters "Name=name,Values=Windows_Server-2025*English*Core*Base*" "Name=is-public,Values=true" --query "reverse(sort_by(Images, &CreationDate))[*].{name: Name, id: ImageId}" --output table
    ```
    ```terminal title="Example Windows Server 2022 command"
    $ aws ec2 describe-images --region <aws_region_name> --filters "Name=name,Values=Windows_Server-2022*English*Core*Base*" "Name=is-public,Values=true" --query "reverse(sort_by(Images, &CreationDate))[*].{name: Name, id: ImageId}" --output table
    ```
    ```terminal title="Example Windows Server 2019 command"
    $ aws ec2 describe-images --region <aws_region_name> --filters "Name=name,Values=Windows_Server-2019*English*Core*Base*" "Name=is-public,Values=true" --query "reverse(sort_by(Images, &CreationDate))[*].{name: Name, id: ImageId}" --output table
    ```
    where:


    &lt;aws_region_name>
    :   Specifies the name of your AWS region.
*   For disconnected clusters, the Windows AMI must have the EC2LaunchV2 agent version 2.0.2107 or later installed. For more information, see "Install the latest version of EC2Launch v2 (AWS documentation)" in the _Additional resources_ section.

## Additional resources {id="additional-resources-windows-machineset-aws-overview_{{ context }}" ._additional-resources}

*   [Overview of machine management](/machine_management/index#overview-of-machine-management)
*   [Install the latest version of EC2Launch v2 (AWS documentation)](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2launch-v2-install.html)