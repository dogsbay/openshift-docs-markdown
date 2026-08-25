{%- set _mod_docs_content_type = "PROCEDURE" %}
# Specifying an existing IAM role {id="specify-an-existing-iam-role_{{ context }}"}

Instead of allowing the installation program to create IAM instance profiles with the default permissions, you can use the `install-config.yaml` file to specify an existing IAM role for control plane and compute instances. {._abstract}

**Prerequisites**

*   You have an existing `install-config.yaml` file.

**Procedure**

1.  Update `compute.platform.aws.iamRole` with an existing role for the compute machines.
    ```yaml title="Sample install-config.yaml file with an IAM role for compute instances"
    compute:
    - hyperthreading: Enabled
      name: worker
      platform:
        aws:
          iamRole: ExampleRole
    ```
1.  Update `controlPlane.platform.aws.iamRole` with an existing role for the control plane machines.
    ```yaml title="Sample install-config.yaml file with an IAM role for control plane instances"
    controlPlane:
      hyperthreading: Enabled
      name: master
      platform:
        aws:
          iamRole: ExampleRole
    ```
1.  Save the file and reference it when installing the {{ product_title }} cluster.


    :::note

    To change or update an IAM account after the cluster has been installed, see [RHOCP 4 AWS cloud-credentials access key is expired](https://access.redhat.com/solutions/4284011) (Red&#160;Hat Knowledgebase).
    
    :::