{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating Operator roles and policies {id="rosa-operator-config-fips_{{ context }}"}

When you deploy a {{ product_title }} cluster, you must create the Operator IAM roles. The cluster Operators use the Operator roles and policies to obtain temporary permissions to perform cluster operations, such as managing storage and external access. {._abstract}

**Prerequisites**

*   You have completed the AWS prerequisites for {{ product_title }}.
*   You have installed and configured the latest {{ rosa_cli_first }} on your installation host.
*   You created the account-wide AWS roles.

**Procedure**

1.  To create your Operator roles, run the following command:
    ```terminal
    $ rosa create operator-roles --hosted-cp --prefix=$PREFIX --oidc-config-id=$OIDC_ID 
    ```

    The Operator roles are now created and ready to use for creating your {{ product_title }} cluster.

**Verification**

*   You can list the Operator roles associated with your {{ product_title }} account. Run the following command:
    ```terminal
    $ rosa list operator-roles
    ```
    ```terminal title="Example output"
    I: Fetching operator roles
    ROLE PREFIX  AMOUNT IN BUNDLE
    <prefix>      8
    ? Would you like to detail a specific prefix Yes
    ? Operator Role Prefix: <prefix>
    ROLE NAME                                                         ROLE ARN                                                                                         VERSION  MANAGED
    <prefix>-kube-system-capa-controller-manager                       arn:aws:iam::4540112244:role/<prefix>-kube-system-capa-controller-manager                       4.13     No
    <prefix>-kube-system-control-plane-operator                        arn:aws:iam::4540112244:role/<prefix>-kube-system-control-plane-operator                        4.13     No
    <prefix>-kube-system-kms-provider                                  arn:aws:iam::4540112244:role/<prefix>-kube-system-kms-provider                                  4.13     No
    <prefix>-kube-system-kube-controller-manager                       arn:aws:iam::4540112244:role/<prefix>-kube-system-kube-controller-manager                       4.13     No
    <prefix>-openshift-cloud-network-config-controller-cloud-credenti  arn:aws:iam::4540112244:role/<prefix>-openshift-cloud-network-config-controller-cloud-credenti  4.13     No
    <prefix>-openshift-cluster-csi-drivers-ebs-cloud-credentials       arn:aws:iam::4540112244:role/<prefix>-openshift-cluster-csi-drivers-ebs-cloud-credentials       4.13     No
    <prefix>-openshift-image-registry-installer-cloud-credentials      arn:aws:iam::4540112244:role/<prefix>-openshift-image-registry-installer-cloud-credentials      4.13     No
    <prefix>-openshift-ingress-operator-cloud-credentials              arn:aws:iam::4540112244:role/<prefix>-openshift-ingress-operator-cloud-credentials              4.13     No
    ```

    After the command runs, it displays all the prefixes associated with your AWS account and notes how many roles are associated with this prefix. If you need to see all of these roles and their details, enter "Yes" on the detail prompt to have these roles listed out with specifics.