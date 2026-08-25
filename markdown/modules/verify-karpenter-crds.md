{%- set _mod_docs_content_type = "PROCEDURE" %}
# Verify Karpenter CRDs are installed {id="verify-karpenter-crds-installed_{{ context }}"}

After enabling the {{ autonode }} on a {{ product_title }} cluster, the Karpenter controller automatically creates Custom Resource Definitions (CRDs) in your cluster. If Karpenter CRDs do not appear within several minutes, you can check the controller deployment status. {._abstract}

**Procedure**

1.  Check for Karpenter CRDs:
    ```terminal
    $ oc get crd | grep karpenter
    ```
    ```terminal title="Example output"
    ec2nodeclasses.karpenter.k8s.aws
    nodeclaims.karpenter.sh
    nodepools.karpenter.sh
    openshiftec2nodeclasses.karpenter.hypershift.openshift.io
    ```
1.  If CRDs are not present, wait 5 minutes for the Karpenter controller to create them. The controller deployment can take several minutes to complete after enabling the {{ autonode }}.
1.  After 5 minutes, if CRDs are still not present, check whether the Karpenter controller pod is running:
    ```terminal
    $ oc get pods -n kube-system | grep karpenter
    ```

    The output should show a Karpenter controller pod in `Running` status.
1.  If the controller pod is not running or CRDs are still missing after 5 minutes, escalate to Red&#160;Hat Support. Provide the following diagnostic information:
    *   Your cluster ID
    *   Output of `rosa describe cluster -c $CLUSTER_ID -o json`
    *   Output of `oc get pods -n kube-system`