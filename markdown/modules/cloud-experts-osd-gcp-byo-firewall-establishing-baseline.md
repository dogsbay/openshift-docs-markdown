{%- set _mod_docs_content_type = "PROCEDURE" %}
# Establishing a baseline (optional) {id="cloud-experts-osd-gcp-byo-firewall-establishing-baseline_{{ context }}"}

Deploy a test workload to verify networking before, during, and after the migration. {._abstract}

**Procedure**

1.  Create a test project and deploy a sample application:
    ```terminal
    $ oc new-project byo-fw-test
    $ oc create deployment hello --image=quay.io/openshift/origin-hello-openshift
    $ oc expose deployment hello --port=8080
    $ oc expose svc hello
    ```
1.  Create a `LoadBalancer` service to test Cloud Controller Manager (CCM) behavior:
    ```terminal
    $ oc create -f - <<EOF
    apiVersion: v1
    kind: Service
    metadata:
      name: test-lb
      namespace: byo-fw-test
    spec:
      type: LoadBalancer
      ports:
      - port: 80
        targetPort: 8080
      selector:
        app: hello
    EOF
    ```
1.  Wait for {{ GCP }} to assign an external IP address to the load balancer. Assignment can take up to 90 seconds:
    ```terminal
    $ oc get svc test-lb -n byo-fw-test -w
    ```
    ```terminal title="Example output"
    NAME      TYPE           CLUSTER-IP      EXTERNAL-IP     PORT(S)        AGE
    test-lb   LoadBalancer   172.30.100.10   34.72.100.200   80:31234/TCP   75s
    ```

**Verification**

1.  Verify that the API server is healthy:
    ```terminal
    $ oc get --raw /healthz
    ```
    ```terminal title="Example output"
    ok
    ```
1.  Verify that the ingress route is responding:
    ```terminal
    $ curl -s http://$(oc get route hello -n byo-fw-test -o jsonpath='{.spec.host}')
    ```
    ```terminal title="Example output"
    Hello OpenShift!
    ```