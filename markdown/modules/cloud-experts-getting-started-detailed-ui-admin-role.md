{%- set _mod_docs_content_type = "PROCEDURE" %}

# Basic OpenShift Cluster Manager Role {id="cloud-experts-getting-started-detailed-ui-admin-role_{{ context }}"}

You need to create the Operator roles to manage your cluster. {._abstract}


:::note

If you created an **Admin OpenShift Cluster Manager role** as directed above **ignore** this entire section. The OpenShift Cluster Manager will create the resources for you.

If you created a **Basic OpenShift Cluster Manager role** earlier, you will need to manually create two more elements before cluster installation can continue:

*   Operator roles
*   OIDC provider

:::


**Procedure**

1.  A pop up window will show you the commands to run.
    ![cloud-experts-getting-started-rosa-deployment-detailed-ui-create-cmds](/_assets/images/cloud-experts-getting-started-rosa-deployment-detailed-ui-create-cmds.png)
1.  Run the commands from the window in your terminal to launch interactive mode. Or, for simplicity, run the following command to create the Operator roles:
    ```terminal
    $ rosa create operator-roles --mode auto --cluster <cluster-name> --yes
    ```

    ***Example output***
    ```terminal
    I: Creating roles using 'arn:aws:iam::000000000000:user/rosauser'
    I: Created role 'rosacluster-b736-openshift-ingress-operator-cloud-credentials' with ARN 'arn:aws:iam::000000000000:role/rosacluster-b736-openshift-ingress-operator-cloud-credentials'
    I: Created role 'rosacluster-b736-openshift-cluster-csi-drivers-ebs-cloud-credent' with ARN 'arn:aws:iam::000000000000:role/rosacluster-b736-openshift-cluster-csi-drivers-ebs-cloud-credent'
    I: Created role 'rosacluster-b736-openshift-cloud-network-config-controller-cloud' with ARN 'arn:aws:iam::000000000000:role/rosacluster-b736-openshift-cloud-network-config-controller-cloud'
    I: Created role 'rosacluster-b736-openshift-machine-api-aws-cloud-credentials' with ARN 'arn:aws:iam::000000000000:role/rosacluster-b736-openshift-machine-api-aws-cloud-credentials'
    I: Created role 'rosacluster-b736-openshift-cloud-credential-operator-cloud-crede' with ARN 'arn:aws:iam::000000000000:role/rosacluster-b736-openshift-cloud-credential-operator-cloud-crede'
    I: Created role 'rosacluster-b736-openshift-image-registry-installer-cloud-creden' with ARN 'arn:aws:iam::000000000000:role/rosacluster-b736-openshift-image-registry-installer-cloud-creden'
    ```