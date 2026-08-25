{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling Operators to support CCO-based workflows with {{ gcp_wid_short }} {id="osdk-cco-gcp-enabling_{{ context }}"}

As an Operator author designing your project to run on Operator Lifecycle Manager (OLM), you can enable your Operator to authenticate against {{ gcp_wid_first }} on {{ product_title }} clusters by customizing your project to support the Cloud Credential Operator (CCO). {._abstract}

With this method, the Operator is responsible for and requires RBAC permissions for creating the `CredentialsRequest` object and reading the resulting `Secret` object.


:::note

By default, pods related to the Operator deployment mount a `serviceAccountToken` volume so that the service account token can be referenced in the resulting `Secret` object.

:::


**Prerequisites**

*   {{ product_title }} 4.17 or later
*   Cluster in **{{ gcp_wid_short }} / Federated Identity** mode
*   OLM-based Operator project

**Procedure**

1.  Update your Operator project’s `ClusterServiceVersion` (CSV) object:
    1.  Ensure Operator deployment in the CSV has the following `volumeMounts` and `volumes` fields so that the Operator can assume the role with web identity:
        ```yaml title="Example volumeMounts and volumes fields"
        # ...
              volumeMounts:

              - name: bound-sa-token
                mountPath: /var/run/secrets/openshift/serviceaccount
                readOnly: true
              volumes:
                 # This service account token can be used to provide identity outside the cluster.
                 - name: bound-sa-token
                   projected:
                     sources:
                     - serviceAccountToken:
                       path: token
                       audience: openshift
        ```
    1.  Ensure your Operator has RBAC permission to create `CredentialsRequests` objects:
        ```yaml title="Example clusterPermissions list"
        # ...
        install:
          spec:
            clusterPermissions:
            - rules:
              - apiGroups:
                - "cloudcredential.openshift.io"
                resources:
                - credentialsrequests
                verbs:
                - create
                - delete
                - get
                - list
                - patch
                - update
                - watch
        ```
    1.  Add the following annotation to claim support for this method of CCO-based workflow with {{ gcp_wid_short }}:
        ```yaml
        # ...
        metadata:
         annotations:
           features.operators.openshift.io/token-auth-gcp: "true"
        ```
1.  Update your Operator project code:
    1.  Get the `audience` and the `serviceAccountEmail` values from the environment variables set on the pod by the subscription config:
        ```go
         // Get ENV var
           audience := os.Getenv("AUDIENCE")
           serviceAccountEmail := os.Getenv("SERVICE_ACCOUNT_EMAIL")
           gcpIdentityTokenFile := "/var/run/secrets/openshift/serviceaccount/token"
        ```
    1.  Ensure you have a `CredentialsRequest` object ready to be patched and applied.

        :::note

        Adding a `CredentialsRequest` object to the Operator bundle is not currently supported.
        
        :::

    1.  Add the {{ gcp_wid_short }} variables to the credentials request and apply it during Operator initialization:
        ```go title="Example applying CredentialsRequest object during Operator initialization"
        // apply CredentialsRequest on install
           credReqTemplate.Spec.GCPProviderSpec.Audience = audience
           credReqTemplate.Spec.GCPProviderSpec.ServiceAccountEmail = serviceAccountEmail
           credReqTemplate.CloudTokenPath = gcpIdentityTokenFile


           c := mgr.GetClient()
           if err := c.Create(context.TODO(), credReq); err != nil {
               if !errors.IsAlreadyExists(err) {
                   setupLog.Error(err, "unable to create CredRequest")
                   os.Exit(1)
               }
           }
        ```
    1.  Ensure your Operator can wait for a `Secret` object to show up from the CCO, as shown in the following example, which is called along with the other items you are reconciling in your Operator:
        ```go title="Example wait for Secret object"
        // WaitForSecret is a function that takes a Kubernetes client, a namespace, and a v1 "k8s.io/api/core/v1" name as arguments
        // It waits until the secret object with the given name exists in the given namespace
        // It returns the secret object or an error if the timeout is exceeded
        func WaitForSecret(client kubernetes.Interface, namespace, name string) (*v1.Secret, error) {
          // set a timeout of 10 minutes
          timeout := time.After(10 * time.Minute)

          // set a polling interval of 10 seconds
          ticker := time.NewTicker(10 * time.Second)

          // loop until the timeout or the secret is found
          for {
             select {
             case <-timeout:
                // timeout is exceeded, return an error
                return nil, fmt.Errorf("timed out waiting for secret %s in namespace %s", name, namespace)
        // add to this error with a pointer to instructions for following a manual path to a Secret that will work
             case <-ticker.C:
                // polling interval is reached, try to get the secret
                secret, err := client.CoreV1().Secrets(namespace).Get(context.Background(), name, metav1.GetOptions{})
                if err != nil {
                   if errors.IsNotFound(err) {
                      // secret does not exist yet, continue waiting
                      continue
                   } else {
                      // some other error occurred, return it
                      return nil, err
                   }
                } else {
                   // secret is found, return it
                   return secret, nil
                }
             }
          }
        }
        ```

        The `timeout` value is based on an estimate of how fast the CCO might detect an added `CredentialsRequest` object and generate a `Secret` object. You might consider lowering the time or creating custom feedback for cluster administrators that could be wondering why the Operator is not yet accessing the cloud resources.
    1.  Read the `service_account.json` field from the secret and use it to authenticate your {{ gcp_short }} client:
        ```go
        service_account_json := secret.StringData["service_account.json"]
        ```