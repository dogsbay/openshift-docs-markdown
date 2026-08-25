{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the cert-manager Operator {id="cloud-experts-dynamic-certificate-custom-domain-install-cert-man-op_{{ context }}"}

You can use the {{ oc_first }} tool to install your cert-manager Operator. {._abstract}

**Procedure**

1.  Create a project to install the cert-manager Operator into:
    ```terminal
    $ oc new-project cert-manager-operator
    ```

    :::important

    Do not attempt to use more than one cert-manager Operator in your cluster. If you have a community cert-manager Operator installed in your cluster, you must uninstall it before installing the cert-manager Operator for Red&#160;Hat OpenShift.
    
    :::

1.  Install the cert-manager Operator for Red Hat OpenShift:
    ```terminal
    $ cat << EOF | oc apply -f -
    apiVersion: operators.coreos.com/v1
    kind: OperatorGroup
    metadata:
      name: openshift-cert-manager-operator-group
      namespace: cert-manager-operator
    spec:
      targetNamespaces:
      - cert-manager-operator
    ---
    apiVersion: operators.coreos.com/v1alpha1
    kind: Subscription
    metadata:
      name: openshift-cert-manager-operator
      namespace: cert-manager-operator
    spec:
      channel: stable-v1
      installPlanApproval: Automatic
      name: openshift-cert-manager-operator
      source: redhat-operators
      sourceNamespace: openshift-marketplace
    EOF
    ```

    :::note

    It takes a few minutes for this Operator to install and complete its set up.
    
    :::

1.  Verify that the cert-manager Operator is running:
    ```terminal
    $ oc -n cert-manager-operator get pods
    ```
    ```text title="Example output"
    NAME                                                        READY   STATUS    RESTARTS   AGE
    cert-manager-operator-controller-manager-84b8799db5-gv8mx   2/2     Running   0          12s
    ```
1.  Annotate the service account used by the cert-manager pods with the AWS IAM role you created earlier:
    ```terminal
    $ oc -n cert-manager annotate serviceaccount cert-manager eks.amazonaws.com/role-arn=${ROLE_ARN}
    ```
1.  Restart the existing cert-manager controller pod by running the following command:
    ```terminal
    $ oc -n cert-manager delete pods -l app.kubernetes.io/name=cert-manager
    ```
1.  Patch the Operator’s configuration to use external nameservers to prevent DNS-01 challenge resolution issues:
    ```terminal
    $ oc patch certmanager.operator.openshift.io/cluster --type merge \
      -p '{"spec":{"controllerConfig":{"overrideArgs":["--dns01-recursive-nameservers-only","--dns01-recursive-nameservers=1.1.1.1:53"]}}}'
    ```
1.  Create a `ClusterIssuer` resource to use Let’s Encrypt by running the following command:
    ```terminal
    $ cat << EOF | oc apply -f -
    apiVersion: cert-manager.io/v1
    kind: ClusterIssuer
    metadata:
      name: letsencrypt-production
    spec:
      acme:
        server: https://acme-v02.api.letsencrypt.org/directory
        email: ${EMAIL}
        # This key doesn't exist, cert-manager creates it
        privateKeySecretRef:
          name: prod-letsencrypt-issuer-account-key
        solvers:
        - dns01:
            route53:
             hostedZoneID: ${ZONE_ID}
             region: ${REGION}
             secretAccessKeySecretRef:
               name: ''
    EOF
    ```
1.  Verify the `ClusterIssuer` resource is ready:
    ```terminal
    $ oc get clusterissuer.cert-manager.io/letsencrypt-production
    ```
    ```text title="Example output"
    NAME                     READY   AGE
    letsencrypt-production   True    47s
    ```