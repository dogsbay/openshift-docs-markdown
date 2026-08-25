{%- set _mod_docs_content_type = "CONCEPT" %}
# About {{ autonode }} troubleshooting {id="autonode-troubleshooting-overview_{{ context }}"}

The {{ autonode }} uses the Karpenter controller to provide automated node provisioning in OpenShift clusters. When the {{ autonode }} fails to provision nodes or reports configuration errors, you can diagnose and resolve issues by examining Karpenter resource status, AWS infrastructure tags, and AWS Identity and Access Management (IAM) permissions. {._abstract}

{{ autonode }} troubleshooting addresses the main failure categories:


Controller deployment issues
:   Karpenter Custom Resource Definitions (CRDs) do not appear after enabling the {{ autonode }}, preventing you from creating or managing Karpenter resources.


AWS resource discovery failures
:   The EC2NodeClass resource cannot discover AWS subnets or security groups because required discovery tags are missing or incorrect.


IAM permission issues
:   The control plane Operator does not have the authorization to create tags on AWS resources, preventing Karpenter from properly configuring security groups.

## General diagnostic workflow {id="autonode-troubleshooting-diagnostic-workflow_{{ context }}"}

Follow this workflow to diagnose and resolve {{ autonode }} issues:

1.  Identify the symptom by checking which Karpenter resources are missing or not ready.
1.  Gather diagnostic data using `oc` commands to inspect custom resource status and AWS CLI commands to verify infrastructure configuration.
1.  Analyze the root cause by comparing observed resource state with expected configuration.
1.  Apply the resolution by adding missing tags, updating IAM policies, or verifying capabilities.
1.  Verify the fix by confirming that Karpenter resources reach ready status and automatic scaling functions correctly.

## When to escalate to Red&#160;Hat Support {id="autonode-troubleshooting-escalating_{{ context }}"}

Escalate to Red&#160;Hat Support in these situations:

*   Karpenter CRDs do not appear after 5 minutes and the Karpenter controller pod is not running.
*   EC2NodeClass remains not ready after adding all required discovery tags and waiting 60 seconds.
*   IAM policies are correctly attached but CloudTrail continues showing authorization errors.

When escalating, provide:

*   Cluster ID
*   Output of `rosa describe cluster -c $CLUSTER_ID -o json`
*   Output of `oc get ec2nodeclass/default -o json`
*   Output of `oc get pods -n kube-system`
*   CloudTrail event details for authorization errors