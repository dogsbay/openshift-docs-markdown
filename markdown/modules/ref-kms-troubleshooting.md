{%- set _mod_docs_content_type = "REFERENCE" %}
# KMS encryption troubleshooting {id="kms-troubleshooting_{{ context }}"}

You can diagnose and resolve common KMS encryption issues to maintain secure key management and cluster availability. {._abstract}

## Invalid KMS configuration {id="kms-invalid-configuration_{{ context }}"}

**Symptom:** APIServer resource shows validation errors during KMS encryption configuration.

**Diagnosis:** Check kube-apiserver Operator logs:
```terminal
$ oc logs -n openshift-kube-apiserver-operator deploy/kube-apiserver-operator | grep -i "kms\|validation\|error"
```

**Solutions:**

*   Verify plugin configuration follows provider requirements
*   Ensure all required fields are specified
*   Verify plugin is running on all control plane nodes:
    ```terminal
    $ oc debug node/<node_name> -- chroot /host ls -la /var/run/kmsplugin/kms.sock
    ```

## KMS permissions errors {id="kms-permissions-errors_{{ context }}"}

**Symptom:** Encryption migration fails with permission errors.

**Diagnosis:** Check Operator and plugin logs:
```terminal
$ oc logs -n openshift-kube-apiserver-operator deploy/kube-apiserver-operator | grep -i "kms\|permission\|access denied"
```

```terminal
$ oc debug node/<node_name> -- chroot /host journalctl -u kms-plugin
```

**Solutions:**

*   Verify plugin has valid authentication credentials
*   Check if credentials have expired
*   Ensure plugin principal has encrypt and decrypt permissions
*   Verify KMS provider key policy allows plugin access
*   Confirm encryption key is enabled and not scheduled for deletion

## Expired or deleted KMS key {id="kms-expired-deleted-key_{{ context }}"}

**Symptom:** API server cannot decrypt secrets when accessing encrypted resources.

**Diagnosis:** Check logs and verify key status:
```terminal
$ oc logs -n openshift-kube-apiserver -l apiserver=true | grep -i "decrypt\|kms.*error"
```

```terminal
$ oc debug node/<node_name> -- chroot /host journalctl -u kms-plugin | grep -i "key\|error"
```

**Solutions:**

*   Re-enable the encryption key if disabled
*   Restore from backup if key was permanently deleted
*   Cancel key deletion if scheduled
*   Ensure KMS provider maintains access to previous key versions


:::warning

Deleted KMS keys prevent data recovery. Align key retention with backup policies.

:::


## API server degraded or unavailable {id="kms-api-server-degraded_{{ context }}"}

**Symptom:** API server becomes degraded or unresponsive after enabling KMS encryption.

**Diagnosis:** Check Operator status and logs:
```terminal
$ oc get clusteroperator kube-apiserver
```

```terminal
$ oc logs -n openshift-kube-apiserver -l apiserver=true --tail=200 | grep -i kms
```

**Solutions:**

*   Check network connectivity between control plane and KMS provider
*   Verify network policies, firewalls, and routes allow communication
*   Monitor KMS provider rate limits and request increases if needed
*   Verify DNS resolution and TLS certificate validation
*   Confirm plugin is running on all control plane nodes:
    ```terminal
    $ oc debug node/<node_name> -- chroot /host systemctl status kms-plugin
    ```

## Encryption migration stuck or slow {id="kms-migration-stuck-slow_{{ context }}"}

**Symptom:** KMS encryption migration takes unusually long or becomes stuck.

**Diagnosis:** Check Operator status and migration logs:
```terminal
$ oc get clusteroperator kube-apiserver
```

```terminal
$ oc logs -n openshift-kube-apiserver-operator deploy/kube-apiserver-operator | grep -i migration
```

**Solutions:**

*   Migration time depends on data size; monitor progress
*   Monitor KMS provider audit logs for rate limiting or throttling events
*   Check network performance between control plane and KMS provider

## Collecting debug information {id="kms-collecting-debug-info_{{ context }}"}

Collect cluster logs:

```terminal
$ oc adm must-gather
```

```terminal
$ oc get apiserver cluster -o yaml > apiserver.yaml
```

```terminal
$ oc logs -n openshift-kube-apiserver-operator deploy/kube-apiserver-operator > kube-apiserver-operator.log
```

```terminal
$ oc logs -n openshift-kube-apiserver -l apiserver=true --tail=500 > kube-apiserver.log
```

Collect KMS provider information:

*   KMS plugin logs from control plane nodes
*   KMS provider audit logs
*   KMS provider key policy and permissions
*   Authentication credentials status
*   Network connectivity test results


:::note

Redact credentials, tokens, and sensitive data before sharing logs.

:::