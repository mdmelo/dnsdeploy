// Providers:

var REG_NONE = NewRegistrar('none'); 
var DNS_GCLOUD = NewDnsProvider('google-cloud-dns'); 
var R53 = NewDnsProvider("r53", "ROUTE53");

// Domains:
// for a domain (zone) provisioned at two Providers add a tag to 
// prevent dnscontrol from throwing 'declared more than once' exception.
// see https://github.com/StackExchange/dnscontrol/issues/1017

// External DNS served by Google Cloud
D('qqmike.com!gcloud', REG_NONE, DnsProvider(DNS_GCLOUD),
    A('@', '204.141.89.164'),
    A('www', '204.141.89.166'),
    CNAME('chat', 'zzchat.qqmike.com.'),
    CNAME('admin', '@', TTL(3600)),
    CNAME('store', 'www.qqmike.com.'),
    CNAME('storegcp', 'www.qqmike.com.'),
    A('meta', '204.141.89.164')
);

// External DNS served by R53
D('qqmike.com!r53', REG_NONE, DnsProvider(R53),
    A('@', '204.141.89.164'),
    A('www', '204.141.89.166'),
    CNAME('chat', 'zzchat.qqmike.com.'),
    CNAME('admin', '@', TTL(3600)),
    CNAME('store', 'www.qqmike.com.'),
    CNAME('storer53', 'www.qqmike.com.'),
    A('meta', '204.141.89.164')
);

