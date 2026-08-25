{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling {{ aws_short }} {{ sts_first }} on an existing cluster {id="enabling-aws-sts-existing-cluster_{{ context }}"}

Enable {{ aws_short }} {{ sts_first }} on an existing {{ product_title }} cluster if you did not configure this authentication method during installation. {._abstract}


:::important

The process to enable {{ sts_short }} on an existing cluster is disruptive and takes a significant amount of time.
Before proceeding, observe the following considerations:

*   Read the following steps and ensure that you understand and accept the time requirement.
The exact time requirement varies depending on the individual cluster, but it is likely to require at least one hour.
*   During this process, you must refresh all service accounts and restart all pods on the cluster.
These actions are disruptive to workloads.
To mitigate this impact, you can temporarily halt these services and then redeploy them when the cluster is ready.
*   Do not update the cluster until this process is complete.

:::


**Prerequisites**

*   You have installed an {{ product_title }} cluster on {{ aws_short }}.
*   You have access to the cluster using an account with `cluster-admin` permissions.
*   You have installed the {{ oc_first }}.
*   You have extracted and prepared the Cloud Credential Operator utility (`ccoctl`) binary.
*   You have access to your AWS account by using the AWS CLI (aws).

**Procedure**

1.  Create an output directory for `ccoctl` generated manifests.
    ```terminal
    $ mkdir ./output_dir
    ```
1.  Create the {{ aws_short }} Identity and Access Management (IAM) OpenID Connect (OIDC) provider.
    1.  Extract the service account public signing key for the cluster by running the following command:
        ```terminal
        $ oc get secret/next-bound-service-account-signing-key \
          -n openshift-kube-apiserver-operator \
          -ojsonpath='{ .data.service-account\.pub }' | base64 -d \
          > output_dir/serviceaccount-signer.public
        ```

        This procedure uses a file named `serviceaccount-signer.public` as an example.
    1.  Create the {{ aws_short }} IAM identity provider and S3 bucket by running the following command:
        ```terminal
        $ ./ccoctl aws create-identity-provider \
          --output-dir output_dir \
          --name <name_you_choose> \
          --region us-east-2 \
          --public-key-file output_dir/serviceaccount-signer.public
        ```

        where:

        `--output-dir`
        :   Specify the output directory you created earlier.

        `--name`
        :   Specify a globally unique name. This name functions as a prefix for AWS resources created by this command.

        `--region`
        :   Specify the AWS region of the cluster.

        `--public-key-file`
        :   Specify the relative path to the `serviceaccount-signer.public` file you created earlier.

    1.  Save or note the Amazon Resource Name (ARN) for the IAM identity provider. You can find this information in the final line of the output of the previous command.
1.  Update the cluster authentication configuration.
    1.  Extract the OIDC issuer URL and update the authentication configuration of the cluster by running the following commands:
        ```terminal
        $ OIDC_ISSUER_URL=`awk '/serviceAccountIssuer/ { print $2 }' output_dir/manifests/cluster-authentication-02-config.yaml`
        $ oc patch authentication cluster --type=merge -p "{\"spec\":{\"serviceAccountIssuer\":\"${OIDC_ISSUER_URL}\"}}"
        ```
    1.  Monitor the configuration update progress by running the following command:
        ```terminal
        $ oc adm wait-for-stable-cluster
        ```

        This process might take 15 minutes or longer.
        The following output indicates that the process is complete:
        ```text
        All clusteroperators are stable
        ```
1.  Restart pods to apply the issuer update.
    1.  Restart all of the pods in the cluster by running the following command:
        ```terminal
        $ oc adm reboot-machine-config-pool mcp/worker mcp/master
        ```

        Restarting a pod updates the `serviceAccountIssuer` field and refreshes the service account public signing key.
    1.  Monitor the restart and update process by running the following command:
        ```terminal
        $ oc adm wait-for-node-reboot nodes --all
        ```

        This process might take 15 minutes or longer. The following output indicates that the process is complete:
        ```text
        All nodes rebooted
        ```
1.  Update the Cloud Credential Operator `spec.credentialsMode` parameter to `Manual` by running the following command:
    ```terminal
    $ oc patch cloudcredential cluster \
      --type=merge \
      --patch '{"spec":{"credentialsMode":"Manual"}}'
    ```
1.  Extract `CredentialsRequests` objects.
    1.  Create a `CLUSTER_VERSION` environment variable by running the following command:
        ```terminal
        $ CLUSTER_VERSION=$(oc get clusterversion version -o json | jq -r '.status.desired.version')
        ```
    1.  Create a `CLUSTER_IMAGE` environment variable by running the following command:
        ```terminal
        $ CLUSTER_IMAGE=$(oc get clusterversion version -o json | jq -r ".status.history[] | select(.version == \"${CLUSTER_VERSION}\") | .image")
        ```
    1.  Extract `CredentialsRequests` objects from the release image by running the following command:
        ```terminal
        $ oc adm release extract \
          --credentials-requests \
          --cloud=aws \
          --from ${CLUSTER_IMAGE} \
          --to output_dir/cred-reqs
        ```
1.  Create {{ aws_short }} IAM roles and apply secrets.
    1.  Create an IAM role for each `CredentialsRequests` object by running the following command:
        ```terminal
        $ ./ccoctl aws create-iam-roles \
          --output-dir ./output_dir/ \
          --name <name_you_choose> \
          --identity-provider-arn <identity_provider_arn> \
          --region us-east-2 \
          --credentials-requests-dir ./output_dir/cred-reqs/ \
          --permissions-boundary-arn=<policy_arn>
        ```

        where:

        `--output-dir`
        :   Specify the output directory you created earlier.

        `--name`
        :   Specify a globally unique name. This name functions as a prefix for AWS resources created by this command.

        `--identity-provider-arn`
        :   Specify the ARN for the IAM identity provider.

        `--region`
        :   Specify the AWS region of the cluster.

        `--credentials-requests-dir`
        :   Specify the relative path to the folder where you extracted the `CredentialsRequest` files with the `oc adm release extract` command.

        `--permissions-boundary-arn`
        :   Optional: Specify the Amazon Resource Name (ARN) of the {{ aws_short }} IAM policy to use as the permissions boundary for the IAM roles created by the `ccoctl` utility.

    1.  Apply the generated secrets by running the following command:
        ```terminal
        $ find ./output_dir/manifests -iname "openshift*yaml" -print0 | xargs -I {} -0 -t oc replace -f {}
        ```
1.  Finish the configuration process by restarting the cluster.
    1.  Restart all of the pods in the cluster by running the following command:
        ```terminal
        $ oc adm reboot-machine-config-pool mcp/worker mcp/master
        ```
    1.  Monitor the restart and update process by running the following command:
        ```terminal
        $ oc adm wait-for-node-reboot nodes --all
        ```

        This process might take 15 minutes or longer.
        The following output indicates that the process is complete:
        ```text
        All nodes rebooted
        ```
    1.  Monitor the configuration update progress by running the following command:
        ```terminal
        $ oc adm wait-for-stable-cluster
        ```

        This process might take 15 minutes or longer.
        The following output indicates that the process is complete:
        ```text
        All clusteroperators are stable
        ```
1.  Optional: Remove the {{ aws_short }} root credentials secret by running the following command:
    ```terminal
    $ oc delete secret -n kube-system aws-creds
    ```