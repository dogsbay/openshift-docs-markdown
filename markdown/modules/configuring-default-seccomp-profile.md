{%- set _mod_docs_content_type = "PROCEDURE" %}

# Verify the default seccomp profile applied to a pod {id="verifying-default-seccomp-profile_{{ context }}"}

{{ product_title }} ships with a default seccomp profile that is referenced as `runtime/default`. In {{ product_version }}, newly created pods have the Security Context Constraint (SCC) set to `restricted-v2` and the default seccomp profile applies to the pod. {._abstract}

**Procedure**

1.  You can verify the Security Context Constraint (SCC) and the default seccomp profile set on a pod by running the following commands:
    1.  Verify what pods are running in the namespace:
        ```terminal
        $ oc get pods -n <namespace>
        ```

        For example, to verify what pods are running in the `workshop` namespace run the following:
        ```terminal
        $ oc get pods -n workshop
        ```
        ```terminal title="Example output"
        NAME                READY   STATUS      RESTARTS   AGE
        parksmap-1-4xkwf    1/1     Running     0          2m17s
        parksmap-1-deploy   0/1     Completed   0          2m22s
        ```
    1.  Inspect the pods:
        ```terminal
        $ oc get pod parksmap-1-4xkwf -n workshop -o yaml
        ```
        ```terminal title="Example output"
        apiVersion: v1
        kind: Pod
        metadata:
          annotations:
            k8s.v1.cni.cncf.io/network-status: |-
              [{
                  "name": "ovn-kubernetes",
                  "interface": "eth0",
                  "ips": [
                      "10.131.0.18"
                  ],
                  "default": true,
                  "dns": {}
              }]
            k8s.v1.cni.cncf.io/network-status: |-
              [{
                  "name": "ovn-kubernetes",
                  "interface": "eth0",
                  "ips": [
                      "10.131.0.18"
                  ],
                  "default": true,
                  "dns": {}
              }]
            openshift.io/deployment-config.latest-version: "1"
            openshift.io/deployment-config.name: parksmap
            openshift.io/deployment.name: parksmap-1
            openshift.io/generated-by: OpenShiftWebConsole
            openshift.io/scc: restricted-v2
            seccomp.security.alpha.kubernetes.io/pod: runtime/default
        ```

        where:

        `restricted-v2`
        :   Specifies the SCC that is added by default if your workload does not have access to a different SCC.

        `runtime/default`
        :   Specifies that newly created pods in {{ product_version }} have the seccomp profile configured to `runtime/default` as mandated by the SCC.