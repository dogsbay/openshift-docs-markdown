{%- set _mod_docs_content_type = "PROCEDURE" %}
# AWS infrastructure prerequisites {id="mos-checklist-aws-infra-prereqs_{{ context }}"}

Before you create your cluster, you need to have sufficient AWS quota. {._abstract}

**Procedure**

*   To verify that your AWS account has sufficient quota available to deploy a cluster, run the following command:
    ```terminal
    $ rosa verify quota
    ```

    This command only checks the total quota allocated to your account; it does not reflect the amount of quota already consumed from that quota. Running this command is optional because your quota is verified during cluster deployment. However, Red&#160;Hat recommends running this command to confirm your quota ahead of time so that deployment is not interrupted by issues with quota availability.