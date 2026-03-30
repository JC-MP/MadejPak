'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS, EN_NAV_ITEMS, type NavItem } from './navigationData';
import ThemeToggle from '@/components/ui/ThemeToggle';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';

// ─── Design tokens ─────────────────────────────────────────────────────────────
const BG            = 'var(--bg)';
const BG_SCROLLED   = 'var(--header-scrolled)';
const BG_DROPDOWN   = 'var(--dropdown-bg)';
const ACCENT        = '#E8610A';
const ACCENT_HOVER  = '#F07520';
const BORDER        = 'var(--border)';

const H_DESKTOP = 72; // px
const H_MOBILE  = 60; // px

// ─── Inline SVG icons — zero extra dependencies ────────────────────────────────

function ChevronDown({ open }: { open: boolean }) {
  return (
    <Box
      component="svg"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      sx={{
        width: 13,
        height: 13,
        ml: 0.5,
        flexShrink: 0,
        transition: 'transform 0.2s ease',
        transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
      }}
    >
      <path d="M3 6l5 4.5L13 6" stroke="currentColor" strokeWidth="1.6"
        strokeLinecap="round" strokeLinejoin="round" />
    </Box>
  );
}

function ChevronRight() {
  return (
    <Box
      component="svg"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      sx={{ width: 11, height: 11, ml: 'auto', opacity: 0.35, flexShrink: 0 }}
    >
      <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.6"
        strokeLinecap="round" strokeLinejoin="round" />
    </Box>
  );
}

function IconHamburger() {
  return (
    <Box component="svg" viewBox="0 0 24 24" fill="none" aria-hidden="true"
      sx={{ width: 22, height: 22 }}>
      <path d="M3 7h18M3 12h18M3 17h18" stroke="currentColor"
        strokeWidth="1.6" strokeLinecap="round" />
    </Box>
  );
}

function IconX() {
  return (
    <Box component="svg" viewBox="0 0 24 24" fill="none" aria-hidden="true"
      sx={{ width: 22, height: 22 }}>
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor"
        strokeWidth="1.6" strokeLinecap="round" />
    </Box>
  );
}

// ─── Logo ──────────────────────────────────────────────────────────────────────

function Logo({ href }: { href: string }) {
  return (
    <Box
      component={Link}
      href={href}
      aria-label="MadejPak – strona główna"
      sx={{
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        flexShrink: 0,
      }}
    >
      <Box
        component="img"
        src="/MadePakjLogo.svg"
        alt="MadejPak"
        sx={{
          height: { xs: 36, md: 40 },
          width: 'auto',
          display: 'block',
          filter: 'var(--logo-filter)',
        }}
      />
    </Box>
  );
}

// ─── Desktop dropdown panel ────────────────────────────────────────────────────

interface DropdownPanelProps {
  item: NavItem;
  open: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClose: () => void;
}

function DropdownPanel({ item, open, onMouseEnter, onMouseLeave, onClose }: DropdownPanelProps) {
  const pathname = usePathname();
  if (!item.children?.length) return null;

  // Check if children use groups
  const hasGroups = item.children.some((c) => c.group);

  // Build grouped structure when needed
  const groups: { name: string; items: typeof item.children }[] = [];
  if (hasGroups) {
    const seen = new Map<string, (typeof item.children)>();
    for (const child of item.children) {
      const g = child.group ?? '';
      if (!seen.has(g)) seen.set(g, []);
      seen.get(g)!.push(child);
    }
    seen.forEach((items, name) => groups.push({ name, items }));
  }

  const subLinkSx = (isActive: boolean) => ({
    display: 'flex',
    alignItems: 'center',
    px: 2,
    py: 1,
    textDecoration: 'none',
    color: isActive ? ACCENT : 'var(--dim-75)',
    fontWeight: isActive ? 600 : 400,
    fontSize: '0.8rem',
    letterSpacing: 0,
    whiteSpace: 'nowrap',
    borderRadius: '4px',
    transition: 'color 0.12s ease, background-color 0.12s ease',
    '&:hover': { color: 'var(--text)', bgcolor: 'var(--surface-05)' },
    '&:focus-visible': { outline: `2px solid ${ACCENT}`, outlineOffset: '-2px' },
  });

  return (
    <Box
      role="menu"
      aria-label={`Podmenu: ${item.label}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      sx={{
        position: 'absolute',
        top: '100%',
        left: '50%',
        transform: open
          ? 'translateX(-50%) translateY(0px)'
          : 'translateX(-50%) translateY(-6px)',
        pt: '6px',
        zIndex: 1400,
        pointerEvents: open ? 'auto' : 'none',
        opacity: open ? 1 : 0,
        transition: 'opacity 0.15s ease, transform 0.15s ease',
        minWidth: hasGroups ? 480 : 230,
      }}
    >
      <Box
        sx={{
          bgcolor: BG_DROPDOWN,
          border: `1px solid ${BORDER}`,
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 12px 40px rgba(0,0,0,0.55)',
        }}
      >
        {hasGroups ? (
          /* ── Grouped layout ── */
          <>
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, p: 2 }}>
              {groups.map((group) => (
                <Box key={group.name}>
                  <Typography sx={{
                    px: 2, pt: 0.5, pb: 1,
                    fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.12em',
                    textTransform: 'uppercase', color: 'var(--dim-28)',
                  }}>
                    {group.name}
                  </Typography>
                  {group.items!.map((sub) => (
                    <Box
                      key={sub.href}
                      component={Link}
                      href={sub.href}
                      role="menuitem"
                      onClick={onClose}
                      sx={subLinkSx(pathname === sub.href)}
                    >
                      {sub.label}
                    </Box>
                  ))}
                </Box>
              ))}
            </Box>

            {item.footerCta && (
              <Box sx={{ borderTop: `1px solid ${BORDER}`, px: 2.5, py: 1.5 }}>
                <Box
                  component={Link}
                  href={item.footerCta.href}
                  onClick={onClose}
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 0.75,
                    px: 2, py: 0.875,
                    bgcolor: ACCENT,
                    color: '#fff',
                    borderRadius: '5px',
                    textDecoration: 'none',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    transition: 'background-color 0.15s ease',
                    '&:hover': { bgcolor: ACCENT_HOVER },
                  }}
                >
                  {item.footerCta.label}
                  <Box component="svg" viewBox="0 0 16 16" fill="none" aria-hidden="true"
                    sx={{ width: 12, height: 12 }}>
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor"
                      strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </Box>
                </Box>
              </Box>
            )}
          </>
        ) : (
          /* ── Simple list (no groups) ── */
          <Box sx={{ py: 1 }}>
            {item.children.map((sub) => {
              const isActive = pathname === sub.href;
              return (
                <Box
                  key={sub.href}
                  component={Link}
                  href={sub.href}
                  role="menuitem"
                  onClick={onClose}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    px: 2.5,
                    py: 1.25,
                    textDecoration: 'none',
                    color: isActive ? ACCENT : 'var(--dim-75)',
                    fontWeight: isActive ? 600 : 400,
                    fontSize: '0.875rem',
                    letterSpacing: 0,
                    whiteSpace: 'nowrap',
                    transition: 'color 0.12s ease, background-color 0.12s ease',
                    '&:hover': { color: 'var(--text)', bgcolor: 'var(--surface-05)' },
                    '&:focus-visible': { outline: `2px solid ${ACCENT}`, outlineOffset: '-2px' },
                  }}
                >
                  {sub.label}
                  <ChevronRight />
                </Box>
              );
            })}
          </Box>
        )}
      </Box>
    </Box>
  );
}

// ─── Desktop navigation ────────────────────────────────────────────────────────

function DesktopNav() {
  const pathname = usePathname();
  const navItems = pathname.startsWith('/en') ? EN_NAV_ITEMS : NAV_ITEMS;
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const open = useCallback((id: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(id);
  }, []);

  const scheduleClose = useCallback(() => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 160);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  const close = useCallback(() => setActiveMenu(null), []);

  // Escape key closes open menu
  useEffect(() => {
    if (!activeMenu) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [activeMenu, close]);

  // Cleanup timer on unmount
  useEffect(() => () => { if (closeTimer.current) clearTimeout(closeTimer.current); }, []);

  return (
    <Box
      component="nav"
      aria-label="Nawigacja główna"
      sx={{ display: 'flex', alignItems: 'center', gap: 0 }}
    >
      {navItems.map((item) => {
        const hasChildren = !!item.children?.length;
        const isOpen      = activeMenu === item.href;
        const isActive    =
          pathname === item.href ||
          item.children?.some((c) => pathname.startsWith(c.href));

        const linkSx = {
          display: 'flex',
          alignItems: 'center',
          px: 1.75,
          minHeight: H_DESKTOP,
          textDecoration: 'none',
          color: isActive ? ACCENT : 'var(--dim-75)',
          fontWeight: isActive ? 600 : 400,
          fontSize: '0.875rem',
          letterSpacing: 0,
          transition: 'color 0.15s ease',
          '&:hover': { color: 'var(--text)' },
          '&:focus-visible': { outline: `2px solid ${ACCENT}`, outlineOffset: '2px' },
        };

        return (
          <Box
            key={item.href}
            sx={{ position: 'relative' }}
            onMouseEnter={() => hasChildren && open(item.href)}
            onMouseLeave={() => hasChildren && scheduleClose()}
          >
            {hasChildren ? (
              <Box
                component={Link}
                href={item.href}
                aria-haspopup="true"
                aria-expanded={isOpen}
                sx={{
                  ...linkSx,
                  gap: 0,
                  textDecoration: 'none',
                }}
              >
                {item.label}
                <ChevronDown open={isOpen} />
              </Box>
            ) : (
              <Box component={Link} href={item.href} sx={linkSx}>
                {item.label}
              </Box>
            )}

            {hasChildren && (
              <DropdownPanel
                item={item}
                open={isOpen}
                onMouseEnter={cancelClose}
                onMouseLeave={scheduleClose}
                onClose={close}
              />
            )}
          </Box>
        );
      })}
    </Box>
  );
}

// ─── Mobile drawer ─────────────────────────────────────────────────────────────

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
}

function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  const pathname     = usePathname();
  const isEn         = pathname.startsWith('/en');
  const navItems     = isEn ? EN_NAV_ITEMS : NAV_ITEMS;
  const contactHref  = isEn ? '/en/kontakt' : '/kontakt';
  const ctaLabel     = isEn ? 'Get a quote' : 'Zapytanie ofertowe';
  const [expanded, setExpanded] = useState<string | null>(null);

  // Reset accordion on close
  useEffect(() => { if (!open) setExpanded(null); }, [open]);

  const toggle = (id: string) =>
    setExpanded((prev) => (prev === id ? null : id));

  const rowBase = {
    px: 3,
    py: 1.875,
    borderBottom: `1px solid ${BORDER}`,
    fontSize: '0.95rem',
    '&:hover': { bgcolor: 'var(--surface-03)' },
    '&:focus-visible': { outline: `2px solid ${ACCENT}`, outlineOffset: '-2px' },
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      // Drawer slides in below the header
      slotProps={{
        paper: {
          sx: {
            width: { xs: '100vw', sm: 340 },
            maxWidth: '100vw',
            bgcolor: BG,
            borderLeft: `1px solid ${BORDER}`,
            top: { xs: H_MOBILE, md: H_DESKTOP },
            height: { xs: `calc(100% - ${H_MOBILE}px)`, md: `calc(100% - ${H_DESKTOP}px)` },
            boxShadow: '-12px 0 40px rgba(0,0,0,0.4)',
          },
        },
        backdrop: {
          sx: {
            top: { xs: H_MOBILE, md: H_DESKTOP },
            bgcolor: 'rgba(0,0,0,0.55)',
          },
        },
      }}
    >
      <Box
        component="nav"
        aria-label="Nawigacja mobilna"
        sx={{ display: 'flex', flexDirection: 'column', height: '100%', overflowY: 'auto' }}
      >
        <List disablePadding sx={{ flex: 1 }}>
          {navItems.map((item) => {
            const hasChildren = !!item.children?.length;
            const isExpanded  = expanded === item.href;
            const isActive    =
              pathname === item.href ||
              item.children?.some((c) => pathname.startsWith(c.href));

            return (
              <Box key={item.href}>
                {hasChildren ? (
                  <>
                    {/* Accordion trigger — split: link on left, chevron on right */}
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'stretch',
                        borderBottom: `1px solid ${BORDER}`,
                      }}
                    >
                      <ListItemButton
                        component={Link}
                        href={item.href}
                        onClick={onClose}
                        aria-controls={`mobile-submenu-${item.href}`}
                        sx={{
                          flex: 1,
                          px: 3,
                          py: 1.875,
                          fontSize: '0.95rem',
                          color: isActive ? ACCENT : 'var(--dim-85)',
                          fontWeight: isActive ? 600 : 400,
                          '&:hover': { bgcolor: 'var(--surface-03)' },
                          '&:focus-visible': { outline: `2px solid ${ACCENT}`, outlineOffset: '-2px' },
                        }}
                      >
                        {item.label}
                      </ListItemButton>
                      <ListItemButton
                        onClick={() => toggle(item.href)}
                        aria-expanded={isExpanded}
                        sx={{
                          px: 2,
                          py: 1.875,
                          minWidth: 48,
                          justifyContent: 'center',
                          color: isActive ? ACCENT : 'var(--dim-85)',
                          borderLeft: `1px solid ${BORDER}`,
                          '&:hover': { bgcolor: 'var(--surface-03)' },
                          '&:focus-visible': { outline: `2px solid ${ACCENT}`, outlineOffset: '-2px' },
                        }}
                      >
                        <ChevronDown open={isExpanded} />
                      </ListItemButton>
                    </Box>

                    {/* Sub-items */}
                    <Collapse
                      in={isExpanded}
                      timeout={200}
                      unmountOnExit
                      id={`mobile-submenu-${item.href}`}
                    >
                      <List disablePadding sx={{ bgcolor: 'var(--drawer-sub-bg)' }}>
                        {item.children!.map((sub) => {
                          const isSubActive = pathname === sub.href;
                          return (
                            <ListItemButton
                              key={sub.href}
                              component={Link}
                              href={sub.href}
                              onClick={onClose}
                              sx={{
                                pl: 5,
                                pr: 3,
                                py: 1.625,
                                color: isSubActive ? ACCENT : 'var(--dim-55)',
                                fontWeight: isSubActive ? 600 : 400,
                                fontSize: '0.875rem',
                                borderBottom: `1px solid var(--surface-04)`,
                                '&:hover': { bgcolor: 'var(--surface-04)', color: 'var(--text)' },
                                '&:focus-visible': { outline: `2px solid ${ACCENT}`, outlineOffset: '-2px' },
                              }}
                            >
                              {sub.label}
                            </ListItemButton>
                          );
                        })}
                      </List>
                    </Collapse>
                  </>
                ) : (
                  <ListItemButton
                    component={Link}
                    href={item.href}
                    onClick={onClose}
                    sx={{
                      ...rowBase,
                      color: isActive ? ACCENT : 'var(--dim-85)',
                      fontWeight: isActive ? 600 : 400,
                    }}
                  >
                    {item.label}
                  </ListItemButton>
                )}
              </Box>
            );
          })}
        </List>

        {/* CTA fixed at drawer bottom */}
        <Box sx={{ p: 3, borderTop: `1px solid ${BORDER}`, flexShrink: 0 }}>
          <Button
            component={Link}
            href={contactHref}
            onClick={onClose}
            variant="contained"
            fullWidth
            disableElevation
            sx={{
              bgcolor: ACCENT,
              color: '#ffffff',
              fontWeight: 700,
              fontSize: '0.95rem',
              textTransform: 'none',
              py: 1.875,
              borderRadius: '6px',
              minHeight: 52,
              '&:hover': { bgcolor: ACCENT_HOVER },
              '&:focus-visible': { outline: `2px solid #fff`, outlineOffset: '2px' },
            }}
          >
            {ctaLabel}
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
}

// ─── Header (default export) ───────────────────────────────────────────────────

export default function Header() {
  const pathname    = usePathname();
  const isEn        = pathname.startsWith('/en');
  const logoHref    = isEn ? '/en' : '/';
  const contactHref = isEn ? '/en/kontakt' : '/kontakt';
  const ctaLabel    = isEn ? 'Get a quote' : 'Zapytanie ofertowe';

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // sync on mount
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Prevent body scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  return (
    <>
      <AppBar
        component="header"
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: scrolled ? BG_SCROLLED : 'transparent',
          borderBottom: `1px solid ${scrolled ? BORDER : 'transparent'}`,
          backdropFilter: scrolled ? 'blur(14px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
          transition: [
            'background-color 0.3s ease',
            'border-color 0.3s ease',
            'backdrop-filter 0.3s ease',
          ].join(', '),
          zIndex: 1300,
          // Ensure dropdowns are not clipped
          overflow: 'visible',
        }}
      >
        <Container maxWidth="xl" sx={{ overflow: 'visible' }}>
          <Toolbar
            disableGutters
            sx={{
              height: { xs: H_MOBILE, md: H_DESKTOP },
              minHeight: 'unset !important',
              overflow: 'visible',
            }}
          >
            {/* Logo */}
            <Logo href={logoHref} />

            {/* Desktop nav — centered between logo and actions */}
            <Box
              sx={{
                display: { xs: 'none', lg: 'flex' },
                flex: 1,
                justifyContent: 'center',
                overflow: 'visible',
              }}
            >
              <DesktopNav />
            </Box>

            {/* Right side: CTA + hamburger */}
            <Stack
              direction="row"
              alignItems="center"
              spacing={1.5}
              sx={{ ml: 'auto' }}
            >
              {/* Desktop CTA */}
              <Button
                component={Link}
                href={contactHref}
                variant="contained"
                disableElevation
                sx={{
                  display: { xs: 'none', lg: 'flex' },
                  bgcolor: ACCENT,
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  textTransform: 'none',
                  letterSpacing: 0,
                  px: 2.5,
                  py: 1.25,
                  borderRadius: '6px',
                  whiteSpace: 'nowrap',
                  minHeight: 40,
                  transition: 'background-color 0.18s ease, transform 0.18s ease',
                  '&:hover': { bgcolor: ACCENT_HOVER, transform: 'translateY(-1px)' },
                  '&:active': { transform: 'translateY(0)' },
                  '&:focus-visible': { outline: `2px solid #fff`, outlineOffset: '2px' },
                }}
              >
                {ctaLabel}
              </Button>

              {/* Theme toggle */}
              <ThemeToggle />

              {/* Language switcher */}
              <LanguageSwitcher />

              {/* Mobile hamburger */}
              <IconButton
                aria-label={drawerOpen ? 'Zamknij menu nawigacyjne' : 'Otwórz menu nawigacyjne'}
                aria-expanded={drawerOpen}
                aria-controls="mobile-drawer"
                onClick={() => setDrawerOpen((v) => !v)}
                sx={{
                  display: { xs: 'flex', lg: 'none' },
                  color: 'var(--text)',
                  p: 1,
                  borderRadius: '6px',
                  '&:hover': { bgcolor: 'var(--surface-07)' },
                  '&:focus-visible': { outline: `2px solid ${ACCENT}`, outlineOffset: '2px' },
                }}
              >
                {drawerOpen ? <IconX /> : <IconHamburger />}
              </IconButton>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile drawer */}
      <MobileDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />

      {/*
       * Spacer — pushes page content below the fixed header.
       * Remove this if the page starts with a full-screen hero
       * that should sit directly below the transparent header.
       */}
      {/* <Box sx={{ height: { xs: H_MOBILE, md: H_DESKTOP } }} /> */}
    </>
  );
}
