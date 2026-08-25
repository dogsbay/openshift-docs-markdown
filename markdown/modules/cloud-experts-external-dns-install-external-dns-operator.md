{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the External DNS Operator {id="cloud-experts-external-dns-install-external-dns-operator_{{ context }}"}

With your environment prepared and you are logged into your cluster, you can use {{ oc_first }} to install the External DNS Operator from the Red Hat software catalog. {._abstract}

**Procedure**

1.  Create a new project:
    ```terminal
    $ oc new-project external-dns-operator
    ```
1.  Install the `External DNS` Operator from the software catalog:
    ```terminal
    $ cat << EOF | oc apply -f -
    apiVersion: operators.coreos.com/v1
    kind: OperatorGroup
    metadata:
      name: external-dns-group
      namespace: external-dns-operator
    spec:
      targetNamespaces:
      - external-dns-operator
    ---
    apiVersion: operators.coreos.com/v1alpha1
    kind: Subscription
    metadata:
      name: external-dns-operator
      namespace: external-dns-operator
    spec:
      channel: stable-v1.1
      installPlanApproval: Automatic
      name: external-dns-operator
      source: redhat-operators
      sourceNamespace: openshift-marketplace
    EOF
    ```
1.  Wait until the `External DNS` Operator is running:
    ```terminal
    $ oc rollout status deploy external-dns-operator --timeout=300s
    ```
1.  Create a secret from the AWS IAM user credentials:
    ```terminal
    $ oc -n external-dns-operator create secret generic external-dns \
      --from-file "${SCRATCH}/credentials"
    ```
1.  Deploy the `ExternalDNS` controller:
    ```terminal
    $ cat << EOF | oc apply -f -
    apiVersion: externaldns.olm.openshift.io/v1beta1
    kind: ExternalDNS
    metadata:
      name: ${DOMAIN}
    spec:
      domains:
        - filterType: Include
          matchType: Exact
          name: ${DOMAIN}
      provider:
        aws:
          credentials:
            name: external-dns
        type: AWS
      source:
        openshiftRouteOptions:
          routerName: external-dns-ingress
        type: OpenShiftRoute
      zones:
        - ${ZONE_ID}
    EOF
    ```
1.  Wait until the controller is running:
    ```terminal
    $ oc rollout status deploy external-dns-${DOMAIN} --timeout=300s
    ```