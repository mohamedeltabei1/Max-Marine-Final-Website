import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Cookie, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Link } from "react-router-dom";

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    setPreferences({ necessary: true, analytics: true, marketing: true });
    localStorage.setItem("cookieConsent", JSON.stringify({ necessary: true, analytics: true, marketing: true }));
    setShowBanner(false);
  };

  const savePreferences = () => {
    localStorage.setItem("cookieConsent", JSON.stringify(preferences));
    setShowBanner(false);
    setShowPreferences(false);
  };

  const rejectNonEssential = () => {
    setPreferences({ necessary: true, analytics: false, marketing: false });
    localStorage.setItem("cookieConsent", JSON.stringify({ necessary: true, analytics: false, marketing: false }));
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="container-maritime">
            <div className="bg-card rounded-xl shadow-maritime-xl border border-border p-6">
              {!showPreferences ? (
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <Cookie className="h-8 w-8 text-gold shrink-0 mt-1" />
                    <div>
                      <h3 className="font-display text-lg font-semibold mb-1">We use cookies</h3>
                      <p className="text-sm text-muted-foreground max-w-2xl">
                        We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.
                        By clicking "Accept All", you consent to our use of cookies.{" "}
                        <Link to="/cookies" className="text-secondary hover:underline">
                          Learn more
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 w-full md:w-auto">
                    <Button variant="outline" size="sm" onClick={() => setShowPreferences(true)}>
                      <Settings className="h-4 w-4 mr-2" />
                      Preferences
                    </Button>
                    <Button variant="outline" size="sm" onClick={rejectNonEssential}>
                      Reject
                    </Button>
                    <Button className="btn-operations" size="sm" onClick={acceptAll}>
                      Accept All
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-lg font-semibold">Cookie Preferences</h3>
                    <button onClick={() => setShowPreferences(false)} className="p-1 hover:bg-muted rounded-md">
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                      <div>
                        <div className="font-medium">Necessary Cookies</div>
                        <div className="text-sm text-muted-foreground">Required for the website to function properly</div>
                      </div>
                      <Switch checked={true} disabled />
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                      <div>
                        <div className="font-medium">Analytics Cookies</div>
                        <div className="text-sm text-muted-foreground">Help us understand how visitors interact with our website</div>
                      </div>
                      <Switch
                        checked={preferences.analytics}
                        onCheckedChange={(checked) => setPreferences({ ...preferences, analytics: checked })}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                      <div>
                        <div className="font-medium">Marketing Cookies</div>
                        <div className="text-sm text-muted-foreground">Used to track visitors across websites for advertising</div>
                      </div>
                      <Switch
                        checked={preferences.marketing}
                        onCheckedChange={(checked) => setPreferences({ ...preferences, marketing: checked })}
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-end gap-3">
                    <Button variant="outline" onClick={rejectNonEssential}>
                      Reject Non-Essential
                    </Button>
                    <Button className="btn-operations" onClick={savePreferences}>
                      Save Preferences
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
