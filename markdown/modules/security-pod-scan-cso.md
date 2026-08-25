{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the {{ rhq_cso }} {id="security-pod-scan-cso_{{ context }}"}

You can install the {{ rhq_cso }} from the {{ product_title }} web console OperatorHub, or by using the CLI. {._abstract}

**Prerequisites**

*   You have installed the `oc` CLI.
*   You have access to the web console as a user with `cluster-admin` privileges.
*   You have containers that come from a {{ quay }} or Quay.io registry running on your cluster.

**Procedure**

1.  You can install the {{ rhq_cso }} by using the {{ product_title }} web console:
    1.  On the web console, navigate to **Ecosystem** -> **Software Catalog** and select **Security**.
    1.  Select the **{{ rhq_cso }}** Operator, and then select **Install**.
    1.  On the **{{ rhq_cso }}** page, select **Install**. **Update channel**, **Installation mode**, and **Update approval** are selected automatically. The **Installed Namespace** field defaults to `openshift-operators`. You can adjust these settings as needed.
    1.  Select **Install**. The **{{ rhq_cso }}** is displayed after a few moments on the **Installed Operators** page.
    1.  Optional: You can add custom certificates to the {{ rhq_cso }}. For example, create a certificate named `quay.crt` in the current directory. Then, run the following command to add the custom certificate to the {{ rhq_cso }}:
        ```terminal
        $ oc create secret generic container-security-operator-extra-certs --from-file=quay.crt -n openshift-operators
        ```
    1.  Optional: If you added a custom certificate, restart the {{ rhq_cso }} pod for the new certificates to take effect.
1.  Alternatively, you can install the {{ rhq_cso }} by using the CLI:
    1.  Retrieve the latest version of the Container Security Operator and its channel by entering the following command:
        ```terminal
        $ oc get packagemanifests container-security-operator \
          -o jsonpath='{range .status.channels[*]}{@.currentCSV} {@.name}{"\n"}{end}' \
          | awk '{print "STARTING_CSV=" $1 " CHANNEL=" $2 }' \
          | sort -Vr \
          | head -1
        ```
        ```terminal title="Example output"
        STARTING_CSV=container-security-operator.v3.8.9 CHANNEL=stable-3.8
        ```
    1.  Using the output from the previous command, create a `Subscription` custom resource for the {{ rhq_cso }} and save it as `container-security-operator.yaml`. For example:
        ```yaml
        apiVersion: operators.coreos.com/v1alpha1
        kind: Subscription
        metadata:
          name: container-security-operator
          namespace: openshift-operators
        spec:
          channel: ${CHANNEL}
          installPlanApproval: Automatic
          name: container-security-operator
          source: redhat-operators
          sourceNamespace: openshift-marketplace
          startingCSV: ${STARTING_CSV}
        ```

        where:

        `spec.channel`
        :   Specifies the values you obtained in the previous step for the `spec.channel`.

        `spec.startingCSV`
        :   Specifies the value you obtained in the previous step for the `spec.startingCSV` parameter.

    1.  Enter the following command to apply the configuration:
        ```terminal
        $ oc apply -f container-security-operator.yaml
        ```
        ```terminal title="Example output"
        subscription.operators.coreos.com/container-security-operator created
        ```