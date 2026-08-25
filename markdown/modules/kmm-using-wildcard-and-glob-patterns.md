{%- set _mod_docs_content_type = "CONCEPT" %}
# Using wildcard and glob patterns {id="kmm-using-wildcard-and-glob-patterns_{{ context }}"}

You can use wildcard and any glob expression supported by the Ash shell in the `sign.filesToSign` field. The shell expands each entry at sign time, so you can match multiple modules with a single entry.  {._abstract}

*   The following example signs all `.ko` files in that directory:
    ```yaml
    sign:
      certSecret:
        name: <cert_secret>  
      keySecret:
        name: <key_secret>  
      filesToSign:
        - /opt/lib/modules/${KERNEL_FULL_VERSION}/*.ko    
    ```
*   The following example signs all modules matching that pattern, for example, `kmm_ci_a.ko`, `kmm_ci_b.ko`, and so on:
    ```yaml
    sign:
      certSecret:
        name: <cert_secret>  
      keySecret:
        name: <key_secret>  
      filesToSign:
        - /opt/lib/modules/${KERNEL_FULL_VERSION}/kmm_ci_?.ko   
    ```
*   The following example signs `driver-a.ko`, `driver-b.ko`, or `driver-c.ko`:
    ```yaml
    sign:
      certSecret:
        name: <cert_secret>  
      keySecret:
        name: <key_secret>  
      filesToSign:
        - /opt/lib/modules/${KERNEL_FULL_VERSION}/driver-[abc].ko    
    ```
*   The following example signs `mod-0.ko` through `mod-9.ko`:
    ```yaml
    sign:
      certSecret:
        name: <cert_secret>  
      keySecret:
        name: <key_secret>  
      filesToSign:
        - /opt/lib/modules/${KERNEL_FULL_VERSION}/mod-[0-9].ko 
    ```